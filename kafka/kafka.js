const { Kafka,logLevel } = require('kafkajs')
const TOPIC = 'kafka_danar_arga_syailendra_betest'

const kafka = new Kafka({
    clientId:'0',
    brokers:['localhost:9092'],
    logLevel: logLevel.ERROR
})

exports.producer = async (data) => {
    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
        topic:TOPIC,
        messages:[
            {value: JSON.stringify(data)}
        ]
    })

    await producer.disconnect()
}