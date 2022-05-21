CREATE TABLE IF NOT EXISTS "cursos" (
"id"   SERIAL , 
"nome" VARCHAR(255), 
"professor" VARCHAR(255), 
"sala" INTEGER, 
"horarioInicio" TIME DEFAULT '00:00', 
"horarioFim" TIME DEFAULT '00:00', 
"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, 
"updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, 
PRIMARY KEY ("id")
);

--CREATE
INSERT INTO "cursos" ("id","nome","professor","sala","horarioInicio","horarioFim","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7) RETURNING "id","nome","professor","sala","horarioInicio","horarioFim","createdAt","updatedAt";

--FINDALL
SELECT "id", "nome", "professor", "sala", "horarioInicio", "horarioFim", "createdAt", "updatedAt" FROM "cursos" AS "curso";

--FINDONE
SELECT "id", "nome", "professor", "sala", "horarioInicio", "horarioFim", "createdAt", "updatedAt" FROM "cursos" AS "curso" WHERE "curso"."id" = '2';

--UPDATE
UPDATE "cursos" SET "professor"=$1,"updatedAt"=$2 WHERE "id" = $3

--DELETE
DELETE FROM "cursos" WHERE "id" = '4'

--DELETEALL
DELETE FROM "cursos"

