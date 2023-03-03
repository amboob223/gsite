const button = document.getElementById("btn");
const first = document.getElementById("first");
const last = document.getElementById("last");
const phone = document.getElementById("phone");
const target = document.getElementById("target");
const birthdate = document.getElementById("birthdate");
const email = document.getElementById("email");
const money = document.getElementById("money");
const other = document.getElementById("other");
const love = document.getElementById("love");


button.addEventListener("click", async () => {

    //we might have to switch the true and false of the radios ghere when you dlick then process to database
    try {

        const body = {
            first: first.value,
            last: last.value,
            phone: phone.value,
            target: target.value,
            email: email.value,
            birthdate: birthdate.value,
            money: money.checked,
            other: other.checked,
            love: love.checked
        }

        const response = await fetch("https://gsite-0hlj.onrender.com/gericka",
            {
                method: "POST",
                headers: { "Content-type": "application/json" }, // this is to tell the browseres that its going to ressive json dats
                body: JSON.stringify(body)
            })
        //serial primal key
        first.value = "",
            last.value = "",
            birthdate.value = "",
            phone.value = "",
            target.value = "",
            email.value = ""

        alert("Your booking was sucessful we will get back with you shorly")

    } catch (error) {
        console.log(error)
    }
})

//check datbase and remove every thing but money like before
