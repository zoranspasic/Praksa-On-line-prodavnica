$(document).ready(function () {

    // Prikaz padajućeg menija prilikom prelaska mišem
    $('.navbar-nav li').hover(function () {

        $(this).find('ul').fadeToggle();

    });

    // Postavke vidljivosti (mogućnosti izbora ) stavke iz menija
    $("#dobrodosli").css("visibility", "visible");

    $(".registracija").css("visibility", "hidden");

    $(".artikli").css("visibility", "hidden");

    $(".akcija").css("visibility", "hidden");

    $(".odjava").css("visibility", "hidden");

    $(".u-name").css("visibility", "hidden");

    // Izbor stavke iz menija
    $('a').on('click', function () {

        let izbor = this.hash;

        // Prikaz izabranog formulara sa skrol-efektom
        $('html, body').animate({ scrollTop: $(izbor).offset().top - 200 }, 600);

        // Izabran je meni PRIJAVA
        if (izbor == "#prijava") {

            // Postavke vidljivosti (mogućnosti izbora ) stavke iz menija
            $("#dobrodosli").css("visibility", "hidden");

            $(".registracija").addClass("skriven");

            $("#prijava").css("visibility", "visible");

            // Posle unetih podataka, izabrano je dugme PRIJAVI ME
            $("#prijavi").on("click", function () {

                let uName = $("#username").val();

                let pas = $("#pass").html();

                // Ispisujemo MODAL umesto ALERT boxa
                $("#myModal").modal("show");
                $(".modal-title").html("Uspešna prijava");
                $(".modal-body").html("Dobro došli, " + uName + " !");

                // Posle uspesne prijave, ponovo sakrivamo formular
                $("#prijava").css("visibility", "hidden");

                // Ponovo se prikazuje meni ODJAVA

                $(".odjava").css("visibility", "visible");

                $(".u-name").css("visibility", "visible");

                $(".artikli").css("visibility", "visible");

                $(".akcija").css("visibility", "visible");


                $(".prijava").css("visibility", "hidden");

                event.preventDefault();

                // Upisujem na odgovarajuce mesto korisničko ime
                $("#uname").html(uName);

            });

        }

        // Izabran je meni ODJAVA
        else if (izbor == "#odjava") {

            // Postavke vidljivosti (mogućnosti izbora ) stavke iz menija

            $(".prijava").css("visibility", "visible");

            $("#dobrodosli").css("visibility", "visible");

            $(".registracija").css("visibility", "hidden");

            $(".odjava").css("visibility", "hidden");

            $(".u-name").css("visibility", "hidden");

            // Ispisujemo MODAL umesto ALERT boxa
            $("#myModal").modal("show");
            $(".modal-title").html("Uspešna odjava");
            $(".modal-body").html("Uspešno ste odjavljeni iz ON-LINE prodavnice !");

            // Postavke vidljivosti pozdravnih poruka

            $("#dobrodosli").css("visibility", "visible");

        }

        else if (izbor == "#registracija") {

            $("#registracija").css("visibility", "visible");

            $("#dobrodosli").css("visibility", "hidden");

            $("#prijava").css("visibility", "none");
        }

    });
});