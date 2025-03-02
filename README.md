## Installation

Use [docker compose](https://docs.docker.com/compose/) to run the application and mongo database. Run in root folder:

```bash
docker-compose up -d  
```

## /create

Creates an appeal with status "new". Also you can add text and theme on request body:

```
{
  "status": "inProgress",
  "text": "Sample text",
  "theme": "Sample theme"
}
```

## /:id/set-in-progress

Use the id of created appeal to use as request parameter to set the appeal to "inProgress" status, as return you will get updated appeal.

```
{
    "_id": "67c4dbb32477c8b9a0a960a9",
    "status": "inProgress",
    "theme": "",
    "text": "",
    "date": "2025-03-02T22:29:04.720Z",
    "__v": 0
}
```

## /:id/set-done

Use the id of appeal to use as request parameter to set the appeal to "done" status, as return you will get updated appeal.

```
{
    "_id": "67c4dbb32477c8b9a0a960a9",
    "status": "inProgress",
    "theme": "",
    "text": "",
    "date": "2025-03-02T22:29:04.720Z",
    "__v": 0
}
```

## /:id/close

Use the id of created appeal to use as request parameter to set the appeal to "closed" status, as return you will get updated appeal.

```
{
    "_id": "67c4dbb32477c8b9a0a960a9",
    "status": "closed",
    "theme": "",
    "text": "",
    "date": "2025-03-02T22:29:04.720Z",
    "__v": 0
}
```

## /get-appeals

If you run the method without request body parameters you will get just all appeals, but if you use date paraments you will get all appeat of the date, and if you use "startDate" and "endDate" parameters you will get all appeals of the date range.

```
{
    "date": "02-03-2025"
}
or
{
    "startDate": "02-03-2025",
    "endDate": "03-03-2025"
}
```

## /close-all-in-progress

Closes all appeals with "inProgress" status and setting to them status "closed". As return you will get object with how much appeals has been changed.

```
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}
```
