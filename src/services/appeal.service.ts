import Appeal from "../models/Appeal.js";
import { Status } from "../Types/types.js";

class AppealService {
  async create(appealData: any) {
    try {
      const appeal = await Appeal.create(appealData);
      return appeal;
    } catch (error) {
      throw new Error(`Failed to create an appeal: ${error.message}`);
    }
  }

  async update(id: string, newData: any) {
    try {
      const appeal = await Appeal.findByIdAndUpdate(id, newData, { new: true });
      if (!appeal) {
        throw new Error("Appeal not found");
      }
      return appeal;
    } catch (error) {
      throw new Error(`Failed to update the appeal: ${error.message}`);
    }
  }

  async findByDateRange(startDateStr: string, endDateStr: string) {
    try {
      const [startDay, startMonth, startYear] = startDateStr.split("-");
      const startDate = new Date(`${startYear}-${startMonth}-${startDay}T00:00:00.000Z`);

      const [endDay, endMonth, endYear] = endDateStr.split("-");
      const endDate = new Date(`${endYear}-${endMonth}-${endDay}T23:59:59.999Z`);

      const appeals = await Appeal.find({
        date: {
          $gte: startDate,
          $lte: endDate,
        },
      });

      return appeals;
    } catch (error) {
      throw new Error(`Failed to find appeals by date range: ${error.message}`);
    }
  }

  async changeStatus(currentStatus: Status, newStatus: Status) {
    try {
      const result = await Appeal.updateMany(
        { status: currentStatus },
        { status: newStatus }
      );
      return result;
    } catch (error) {
      throw new Error(`Failed to change appeal status: ${error.message}`);
    }
  }

  async getAll() {
    try {
      const appeals = await Appeal.find();
      return appeals;
    } catch (error) {
      throw new Error(`Failed to retrieve appeals: ${error.message}`);
    }
  }
}

export default new AppealService();
