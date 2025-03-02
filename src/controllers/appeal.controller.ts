import appealService from "../services/appeal.service.js";
import { Appeal } from "../Types/interfaces.js";

class AppealController {
  async create(req, res) {
    try {
      const { status, text, theme } = req.body;
      const appeal = await appealService.create({ status, text, theme });
      res.status(200).json(appeal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async setInProgress(req, res) {
    try {
      const { id } = req.params;
      const appeal = await appealService.update(id, {
        status: "inProgress",
      });
      res.status(200).json(appeal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async setIsDone(req, res) {
    try {
      const { text = "" } = req.body;
      const { id } = req.params;
      const appeal = await appealService.update(id, {
        status: "done",
        text,
      });
      res.status(200).json(appeal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async close(req, res) {
    try {
      const { text = "" } = req.body;
      const { id } = req.params;
      const appeal = await appealService.update(id, {
        status: "closed",
        text,
      });
      res.status(200).json(appeal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAppeals(req, res) {
    try {
      const { startDate, endDate, date } = req.body;

      if (date) {
        const appeals = await appealService.findByDateRange(date, date);
        res.status(200).json(appeals);
        return;
      }

      if (startDate && endDate) {
        const appeals = await appealService.findByDateRange(startDate, endDate);
        res.status(200).json(appeals);
        return;
      }

      const appeals = await appealService.getAll();
      res.status(200).json(appeals);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async closeAllInProgress(req, res) {
    try {
      const users = await appealService.changeStatus("inProgress", "closed");
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new AppealController();
