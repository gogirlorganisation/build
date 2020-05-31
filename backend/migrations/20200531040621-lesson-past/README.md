# Migration `20200531040621-lesson-past`

This migration has been generated by Angad Singh at 5/31/2020, 4:06:21 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `tgc-build`.`Lesson` DROP COLUMN `open`,
ADD COLUMN `past` boolean NOT NULL DEFAULT false ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200531040155-lesson-edits..20200531040621-lesson-past
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "mysql"
-  url = "***"
+  url      = env("MYSQL_URL")
 }
 generator client {
   provider = "prisma-client-js"
@@ -33,9 +33,9 @@
   id           Int          @id @default(autoincrement())
   createdAt    DateTime     @default(now())
   updatedAt    DateTime     @updatedAt
   title        String
-  open         Boolean      @default(false)
+  past         Boolean      @default(false)
   date         DateTime
   materials    String?
   hindiVideo   String?
   englishVideo String?
```

