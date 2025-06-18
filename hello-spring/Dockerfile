# ------------ Stage 1: Build Stage ------------
FROM eclipse-temurin:21-jdk-alpine AS builder

WORKDIR /workspace

COPY mvnw .
COPY .mvn .mvn

# Copy the pom.xml file first to leverage Docker layer caching
# Dependencies are downloaded only when pom.xml changes
COPY pom.xml .
RUN ./mvnw dependency:go-offline -B

# Copy the rest of the application source code
COPY src ./src

# This creates the executable JAR file
RUN ./mvnw package -DskipTests -B

ARG JAR_FILE_PATH=/workspace/target/*.jar

# ------------ Stage 2: Runtime Stage ------------
FROM eclipse-temurin:21-jre-alpine

ARG JAR_FILE_PATH

WORKDIR /app

RUN addgroup -S springapp && adduser -S springapp -G springapp

USER springapp:springapp

COPY --from=builder /workspace/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]