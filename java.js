const email_log = "email@gmail.com";
const password_log = "1234";

const email = prompt("Emailni kiriting:");

const password = prompt("Parolni kiriting:");

if (email === email_log && password === password_log) {
    alert("Dobriy pajalovat !");
} else {
    alert("Email yoki parol noto'g'ri");
}