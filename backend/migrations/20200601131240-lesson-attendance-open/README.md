# Migration `20200601131240-lesson-attendance-open`

This migration has been generated by Angad Singh at 6/1/2020, 1:12:40 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `tgc-build`.`Lesson` ADD COLUMN `attendanceOpen` boolean NOT NULL DEFAULT true ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200531055752-lesson-quiz..20200601131240-lesson-attendance-open
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
@@ -29,21 +29,22 @@
   userId    Int?
 }
 model Lesson {
-  id           Int          @id @default(autoincrement())
-  createdAt    DateTime     @default(now())
-  updatedAt    DateTime     @updatedAt
-  title        String
-  past         Boolean      @default(false)
-  date         DateTime
-  materials    String?
-  hindiVideo   String?
-  englishVideo String?
-  attendance   Attendance[]
-  quiz         String?
-  maxScore     Int?
-  quizAttempts UserQuiz[]
+  id             Int          @id @default(autoincrement())
+  createdAt      DateTime     @default(now())
+  updatedAt      DateTime     @updatedAt
+  title          String
+  past           Boolean      @default(false)
+  attendanceOpen Boolean      @default(true)
+  date           DateTime
+  materials      String?
+  hindiVideo     String?
+  englishVideo   String?
+  attendance     Attendance[]
+  quiz           String?
+  maxScore       Int?
+  quizAttempts   UserQuiz[]
 }
 model Attendance {
   id        Int      @id @default(autoincrement())
```


