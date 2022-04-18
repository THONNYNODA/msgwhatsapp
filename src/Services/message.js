const accountSid = "AC69e343f95d53ec9007aa063c1b0ef96c";
const authToken = "8113852ecd304159bd5df329dd61d9ac";

const twilio = require("twilio");

function MessageCliente(number) {
  const client = new twilio(accountSid, authToken);
  const numberPhone = `whatsapp:+55${number}`;
  const numberPhoneDefault = "whatsapp:+14155238886";
  client.messages
    .create({
      body: "Testando whatsapp na aplicacao",
      to: numberPhone,
      from: numberPhoneDefault,
    })
    .then((message) => console.log(message).done());
}

module.exports = MessageCliente;
