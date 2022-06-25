import { Kafka } from 'kafkajs';

const kafkaBroker = process.env.BROKER as string;

const kafka = new Kafka({
  clientId: process.env.CLIENT_ID,
  brokers: [kafkaBroker],
});

export { kafka };
