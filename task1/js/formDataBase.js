$("#sendData").on("click",function() {
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var tariff = $("#tariff").val().trim();
    var adress = $("#adress").val().trim();
    var data = $("#data").val().trim();
    var date = new Date();

    //Ограничения формы
    if(name == "") {
        $("#errorMess").text("Введите ФИО");
        return false;
    } else if (email == "") {
        $("#errorMess").text("Введите email");
        return false;
    } else if (phone == "") {
        $("#errorMess").text("Введите номер телефона");
        return false;
    } else if (tariff == "") {
        $("#errorMess").text("Выберите тариф");
        return false;
    } else if (adress == "") {
        $("#errorMess").text("Введите адресс доставки");
        return false;
    } else if (data == "") {
        $("#errorMess").text("Выберите дату доставки");
        return false;
    }

    $("#errorMess").text("");

    //Передача данных с помощью ajax
    $.ajax({
        url:'ajax/data.php',
        type: 'POST',
        cache: false,
        data: { 'name':name, 'email':email, 'phone':phone, 'tariff':tariff, 'adress':adress, 'data':data },
        dataType:'html',
        beforeSend: function() {
            $("#sendData").prop("disabled", true);
        },
        success: function(data) {
            if(!data) {
                alert("Ошибка, сообщение не отправлено");
            } else {
                $("#form").trigger("reset");
            }

            $("#sendData").prop("disabled", false);
        }
    });
});