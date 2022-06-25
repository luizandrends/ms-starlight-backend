export default interface KafkaProducerDTO {
  kafka: {
    topicName: string;
  };
  lambda?: {
    specs: {
      name: string;
      runtime: string;
      timeout: number;
      handler: string;
      memory: string;
      buisnessUnity: string;
      tribe: string;
      team: string;
    };
    s3?: {
      specs: {
        name: string;
        bucketVersioning: boolean;
        buisnessUnity: string;
        tribe: string;
        team: string;
      };
    };
  };
}
