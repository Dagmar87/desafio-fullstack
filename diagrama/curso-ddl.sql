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