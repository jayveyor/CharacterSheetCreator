$(function () {

    $('.gallery').flickity({
        wrapAround: true,
        imagesLoaded: true,
    });

    const spinner = $(".spinner").spinner();

    $(".spinner").spinner({
        min: 1
    });

    $(`.gallery .galleryItem`).on(`click`, function () {
        console.log(`testing`);
        $("#sheet").removeClass(`layout1 layout2 layout3 layout4 layout5`);
        const id = $(this).attr(`id`);
        $("#sheet").addClass(`${id}`);
    });

    $(`#globform`).on(`submit`, function (e) {
        e.preventDefault();
        forms();
    });
    $(`#globform`).change(function () {
        forms();
    });

    $(`#boxform`).change(function () {
        forms();
    });
    $(`#boxform`).on(`submit`, function (e) {
        e.preventDefault();
        forms();
    });

    $('.form1 .hide').on(`click`, function () {
        console.log(`wow`)
        $(`.form1 .forms`).toggle("slow", function () {
        });
    });
    $('.form2 .hide').on(`click`, function () {
        $(`.form2 .forms`).toggle("slow", function () {
        });
    });
    $('.form3 .hide').on(`click`, function () {
        $(`.form3 .forms`).toggle("slow", function () {
        });
    });
    $('.form4 .hide').on(`click`, function () {
        $(`.form4 .forms`).toggle("slow", function () {
        });
    });
    $('.form5 .hide').on(`click`, function () {
        $(`.form5 .forms`).toggle("slow", function () {
        });
    });
    $('.form6 .hide').on(`click`, function () {
        $(`.form6 .forms`).toggle("slow", function () {
        });
    });
    $('.form7 .hide').on(`click`, function () {
        $(`.form7 .forms`).toggle("slow", function () {
        });
    });
    $('.form8 .hide').on(`click`, function () {
        $(`.form8 .forms`).toggle("slow", function () {
        });
    });

    $('#globform .hide').on(`click`, function () {
        $(`#globalstyles`).toggle("slow", function () {
        });
    });


    $(`.form1 button`).on(`click`, function () {

        $("#sheet .boxone").remove();
    });

    $(`.form2 button`).on(`click`, function () {


        $("#sheet .boxtwo").remove();
    });

    $(`.form3 button`).on(`click`, function () {

        $("#sheet .boxthree").remove();
    });

    $(`.form4 button`).on(`click`, function () {

        $("#sheet .boxfour").remove();
    });

    $(`.form5 button`).on(`click`, function () {

        $("#sheet .boxfive").remove();
    });

    $(`.form6 button`).on(`click`, function () {

        $("#sheet .boxsix").remove();
    });

    $(`.form7 button`).on(`click`, function () {

        $("#sheet .boxseven").remove();
    });

    $(`.form8 button`).on(`click`, function () {

        $("#sheet .boxeight").remove();
    });


    forms = function () {
        const fontFamily = $("select[name='font']").val();
        $("#sheet").removeClass(`font1 font2 font3`);
        $("#sheet").addClass(` ${fontFamily}`);

        const fontSize = $("select[name='size']").val();
        $("#sheet").removeClass(`size1 size2 size3`);
        $("#sheet").addClass(` ${fontSize}`);

        const tfontSize = $("select[name='sheettitlesize']").val();
        $("#sheet .sheettitle").removeClass(`tsize1 tsize2 tsize3`);
        $("#sheet .sheettitle").addClass(` ${tfontSize}`);

        const sheetTStyle = $("select[name='sheettitlestyle']").val();
        $("#sheet .sheettitle").removeClass(`tcenter tleft tright tspace`);
        $("#sheet .sheettitle").addClass(` ${sheetTStyle}`);

        const border = $("select[name='border']").val();
        $("#sheet").removeClass(`solidb dottedb doubleb`);
        $("#sheet").addClass(` ${border}`);
        $(".contentbox").removeClass(`solidb dottedb doubleb`);
        $(".contentbox").addClass(` ${border}`);

        const boxTitle = $("select[name='boxtitle']").val();
        $(`.titlebox`).removeClass(` titlespace`);
        $(".boxtitle").removeClass(`centert leftt rightt floatt`);
        if (boxTitle === `floatt`) {
            $(`#sheet .titlebox`).addClass(` titlespace`);
            $("#sheet .boxtitle").addClass(` ${boxTitle}`);
        } else {
            $("#sheet .boxtitle").addClass(` ${boxTitle}`);
        }

        const sheetTitle = $("input[name='sheettitle']").val();
        $('#sheet .sheettitle h2').empty();
        $(`#sheet .sheettitle`).prepend(`<h2>${sheetTitle}</h2>`);

        const box1 = $("select[name='box1type']").val();

        const divnumber1 = $("input[name='divvalue1']").val();


        for (let i = 0; i < divnumber1.length; i++) {
            if (box1 === 'boxplaque') {
                $(`.box1 .boxwrap`).append(`<div class="boxone" contenteditable="true"><h1>00</h1><h4>Header</h4></div>`);
            } else {
                $(`.box1 .boxwrap`).append(`<div class="boxone"></div>`);
                console.log(`how many times`);
            };
        };

        const box1title = $("input[name='box1title']").val();
        $('#sheet .box1 .boxtitle').empty();
        $(`#sheet .box1 .boxtitle`).prepend(`<h3>${box1title}</h3>`);


        $(".boxone").removeClass(`boxlined boxnone boximg boxbubbles boxplaque`);
        $(".table1").removeClass(` boxtable`);
        $(".tabletitles1").removeClass(` showme`);
        $(".hidespin1").addClass(` showspin`);
        if (box1 === 'boxtable') {
            $(".table1").addClass(` ${box1}`);
            $(".boxone").addClass(` boxlined`);
            $(".tabletitles1").addClass(` showme`);
        } else if (box1 === 'boxnone') {
            $(".hidespin1").removeClass(` showspin`);
            $(".boxone").addClass(` ${box1}`);
        } else {
            $(".boxone").addClass(` ${box1}`);
        }


        const box1table1 = $("input[name='box1tabletitle1']").val();
        $('.box1 .line0 .tabletitle').empty();
        $(`.box1 .line0 .tabletitle`).prepend(`<h4>${box1table1}</h4>`);
        const box1table2 = $("input[name='box1tabletitle2']").val();
        $('.box1 .line1 .tabletitle').empty();
        $(`.box1 .line1 .tabletitle`).prepend(`<h4>${box1table2}</h4>`);
        const box1table3 = $("input[name='box1tabletitle3']").val();
        $('.box1 .line2 .tabletitle').empty();
        $(`.box1 .line2 .tabletitle`).prepend(`<h4>${box1table3}</h4>`);
        const box1table4 = $("input[name='box1tabletitle4']").val();
        $('.box1 .line3 .tabletitle').empty();
        $(`.box1 .line3 .tabletitle`).prepend(`<h4>${box1table4}</h4>`);


        const box2 = $("select[name='box2type']").val();
        const divnumber2 = $("input[name='divvalue2']").val();
        for (i2 = 0; i2 < divnumber2; i2++) {
            if (box2 === 'boxplaque') {
                $(`.box2 .boxwrap`).append(`<div class="boxtwo"><h1>00</h1><h4>Header</h4></div>`);
            } else {
                $(`.box2 .boxwrap`).append(`<div class="boxtwo"></div>`);
            };
        };


        const box2title = $("input[name='box2title']").val();
        $('#sheet .box2 .boxtitle').empty();
        $(`#sheet .box2 .boxtitle`).prepend(`<h3>${box2title}</h3>`);
        $(".boxtwo").removeClass(`boxlined boxnone boximg boxbubbles boxplaque`);
        $(".table2").removeClass(` boxtable`);
        $(".tabletitles2").removeClass(` showme`);
        $(".hidespin2").addClass(` showspin`);
        if (box2 === 'boxtable') {
            $(".table2").addClass(` ${box2}`);
            $(".boxtwo").addClass(` boxlined`);
            $(".tabletitles2").addClass(` showme`);
        } else if (box2 === 'boxnone') {
            $(".hidespin2").removeClass(` showspin`);
            $(".boxtwo").addClass(` ${box2}`);
        } else {
            $(".boxtwo").addClass(` ${box2}`);
        }


        const box2table1 = $("input[name='box2tabletitle1']").val();
        $('.box2 .line0 .tabletitle').empty();
        $(`.box2 .line0 .tabletitle`).prepend(`<h4>${box2table1}</h4>`);
        const box2table2 = $("input[name='box2tabletitle2']").val();
        $('.box2 .line1 .tabletitle').empty();
        $(`.box2 .line1 .tabletitle`).prepend(`<h4>${box2table2}</h4>`);
        const box2table3 = $("input[name='box2tabletitle3']").val();
        $('.box2 .line2 .tabletitle').empty();
        $(`.box2 .line2 .tabletitle`).prepend(`<h4>${box2table3}</h4>`);
        const box2table4 = $("input[name='box2tabletitle4']").val();
        $('.box2 .line3 .tabletitle').empty();
        $(`.box2 .line3 .tabletitle`).prepend(`<h4>${box2table4}</h4>`);

        const divnumber3 = $("input[name='divvalue3']").val();
        const box3 = $("select[name='box3type']").val();
        for (i3 = 0; i3 < divnumber3; i3++) {
            if (box3 === 'boxplaque') {
                $(`.box3 .boxwrap`).append(`<div class="boxthree"><h1>00</h1><h4>Header</h4></div>`);
            } else {
                $(`.box3 .boxwrap`).append(`<div class="boxthree"></div>`);
            };
        };


        const box3title = $("input[name='box3title']").val();
        $('#sheet .box3 .boxtitle').empty();
        $(`#sheet .box3 .boxtitle`).prepend(`<h3>${box3title}</h3>`);


        $(".boxthree").removeClass(`boxlined boxnone boximg boxbubbles boxplaque`);
        $(".table3").removeClass(` boxtable`);
        $(".tabletitles3").removeClass(` showme`);
        $(".hidespin3").addClass(` showspin`);
        if (box3 === 'boxtable') {
            $(".table3").addClass(` ${box3}`);
            $(".boxthree").addClass(` boxlined`);
            $(".tabletitles3").addClass(` showme`);
        } else if (box3 === 'boxnone') {
            $(".hidespin3").removeClass(` showspin`);
            $(".boxthree").addClass(` ${box3}`);
        } else {
            $(".boxthree").addClass(` ${box3}`);
        }

        const box3table1 = $("input[name='box3tabletitle1']").val();
        $('.box3 .line0 .tabletitle').empty();
        $(`.box3 .line0 .tabletitle`).prepend(`<h4>${box3table1}</h4>`);
        const box3table2 = $("input[name='box3tabletitle2']").val();
        $('.box3 .line1 .tabletitle').empty();
        $(`.box3 .line1 .tabletitle`).prepend(`<h4>${box3table2}</h4>`);
        const box3table3 = $("input[name='box3tabletitle3']").val();
        $('.box3 .line2 .tabletitle').empty();
        $(`.box3 .line2 .tabletitle`).prepend(`<h4>${box3table3}</h4>`);
        const box3table4 = $("input[name='box3tabletitle4']").val();
        $('.box3 .line3 .tabletitle').empty();
        $(`.box3 .line3 .tabletitle`).prepend(`<h4>${box3table4}</h4>`);



        const box4 = $("select[name='box4type']").val();

        const divnumber4 = $("input[name='divvalue4']").val();

        for (i4 = 0; i4 < divnumber4; i4++) {
            if (box4 === 'boxplaque') {
                $(`.box4 .boxwrap`).append(`<div class="boxfour"><h1>00</h1><h4>Header</h4></div>`);
            } else {
                $(`.box4 .boxwrap`).append(`<div class="boxfour"></div>`);
            };
        };

        const box4title = $("input[name='box4title']").val();
        $('#sheet .box4 .boxtitle').empty();
        $(`#sheet .box4 .boxtitle`).prepend(`<h3>${box4title}</h3>`);

        $(".boxfour").removeClass(`boxlined boxnone boximg boxbubbles boxplaque`);
        $(".table4").removeClass(` boxtable`);
        $(".tabletitles4").removeClass(` showme`);
        $(".hidespin4").addClass(` showspin`);
        if (box4 === 'boxtable') {
            $(".table4").addClass(` ${box4}`);
            $(".boxfour").addClass(` boxlined`);
            $(".tabletitles4").addClass(` showme`);
        } else if (box4 === 'boxnone') {
            $(".hidespin4").removeClass(` showspin`);
            $(".boxfour").addClass(` ${box4}`);
        } else {
            $(".boxfour").addClass(` ${box4}`);
        }

        const box4table1 = $("input[name='box4tabletitle1']").val();
        $('.box4 .line0 .tabletitle').empty();
        $(`.box4 .line0 .tabletitle`).prepend(`<h4>${box4table1}</h4>`);
        const box4table2 = $("input[name='box4tabletitle2']").val();
        $('.box4 .line1 .tabletitle').empty();
        $(`.box4 .line1 .tabletitle`).prepend(`<h4>${box4table2}</h4>`);
        const box4table3 = $("input[name='box4tabletitle3']").val();
        $('.box4 .line2 .tabletitle').empty();
        $(`.box4 .line2 .tabletitle`).prepend(`<h4>${box4table3}</h4>`);
        const box4table4 = $("input[name='box4tabletitle4']").val();
        $('.box4 .line3 .tabletitle').empty();
        $(`.box4 .line3 .tabletitle`).prepend(`<h4>${box4table4}</h4>`);


        const divnumber5 = $("input[name='divvalue5']").val();
        const box5 = $("select[name='box5type']").val();
        for (i5 = 0; i5 < divnumber5; i5++) {
            if (box5 === 'boxplaque') {
                $(`.box5 .boxwrap`).append(`<div class="boxfive"><h1>00</h1><h4>Header</h4></div>`);
            } else {
                $(`.box5 .boxwrap`).append(`<div class="boxfive"></div>`);
            };
        };


        const box5title = $("input[name='box5title']").val();
        $('#sheet .box5 .boxtitle').empty();
        $(`#sheet .box5 .boxtitle`).prepend(`<h3>${box5title}</h3>`);



        $(".boxfive").removeClass(`boxlined boxnone boximg boxbubbles boxplaque`);
        $(".table5").removeClass(` boxtable`);
        $(".tabletitles5").removeClass(` showme`);
        $(".hidespin5").addClass(` showspin`);
        if (box5 === 'boxtable') {
            $(".table5").addClass(` ${box5}`);
            $(".boxfive").addClass(` boxlined`);
            $(".tabletitles5").addClass(` showme`);
        } else if (box5 === 'boxnone') {
            $(".hidespin5").removeClass(` showspin`);
            $(".boxfive").addClass(` ${box5}`);
        } else {
            $(".boxfive").addClass(` ${box5}`);
        };

        const box5table1 = $("input[name='box5tabletitle1']").val();
        $('.box5 .line0 .tabletitle').empty();
        $(`.box5 .line0 .tabletitle`).prepend(`<h4>${box5table1}</h4>`);
        const box5table2 = $("input[name='box5tabletitle2']").val();
        $('.box5 .line1 .tabletitle').empty();
        $(`.box5 .line1 .tabletitle`).prepend(`<h4>${box5table2}</h4>`);
        const box5table3 = $("input[name='box5tabletitle3']").val();
        $('.box5 .line2 .tabletitle').empty();
        $(`.box5 .line .tabletitle`).prepend(`<h4>${box5table3}</h4>`);
        const box5table4 = $("input[name='box5tabletitle4']").val();
        $('.box5 .line3 .tabletitle').empty();
        $(`.box5 .line3 .tabletitle`).prepend(`<h4>${box5table4}</h4>`);

        const divnumber6 = $("input[name='divvalue6']").val();
        const box6 = $("select[name='box6type']").val();
        for (i6 = 0; i6 < divnumber6; i6++) {
            if (box6 === 'boxplaque') {
                $(`.box6 .boxwrap`).append(`<div class="boxsix"> <h1>00</h1><h4>Header</h4></div>`);
            } else {
                $(`.box6 .boxwrap`).append(`<div class="boxsix"></div>`);
            };
        };

        const box6title = $("input[name='box6title']").val();
        $('#sheet .box6 .boxtitle').empty();
        $(`#sheet .box6 .boxtitle`).prepend(`<h3>${box6title}</h3>`);


        $(".boxsix").removeClass(`boxlined boxnone boximg boxbubbles boxplaque`);
        $(".table6").removeClass(` boxtable`);
        $(".tabletitles6").removeClass(` showme`);
        $(".hidespin6").addClass(` showspin`);
        if (box6 === 'boxtable') {
            $(".table6").addClass(` ${box6}`);
            $(".boxsix").addClass(` boxlined`);
            $(".tabletitles6").addClass(` showme`);
        } else if (box6 === 'boxnone') {
            $(".hidespin6").removeClass(` showspin`);
            $(".boxsix").addClass(` ${box6}`);
        } else {
            $(".boxsix").addClass(` ${box6}`);
        };

        const box6table1 = $("input[name='box6tabletitle1']").val();
        $('.box6 .line0 .tabletitle').empty();
        $(`.box6 .line0 .tabletitle`).prepend(`<h4>${box6table1}</h4>`);
        const box6table2 = $("input[name='box6tabletitle2']").val();
        $('.box6 .line1 .tabletitle').empty();
        $(`.box6 .line1 .tabletitle`).prepend(`<h4>${box6table2}</h4>`);
        const box6table3 = $("input[name='box6tabletitle3']").val();
        $('.box6 .line2 .tabletitle').empty();
        $(`.box6 .line2 .tabletitle`).prepend(`<h4>${box6table3}</h4>`);
        const box6table4 = $("input[name='box6tabletitle4']").val();
        $('.box6 .line3 .tabletitle').empty();
        $(`.box6 .line3 .tabletitle`).prepend(`<h4>${box6table4}</h4>`);


        const divnumber7 = $("input[name='divvalue7']").val();
        const box7 = $("select[name='box7type']").val();
        for (i7 = 0; i7 < divnumber7; i7++) {
            if (box7 === 'boxplaque') {
                $(`.box7 .boxwrap`).append(`<div class="boxseven"><h1>00</h1><h4>Header</h4></div>`);
            } else {
                $(`.box7 .boxwrap`).append(`<div class="boxseven"></div>`);
            };
        };


        const box7title = $("input[name='box7title']").val();
        $('#sheet .box7 .boxtitle').empty();
        $(`#sheet .box7 .boxtitle`).prepend(`<h3>${box7title}</h3>`);


        $(".boxseven").removeClass(`boxlined boxnone boximg boxbubbles boxplaque`);
        $(".table7").removeClass(` boxtable`);
        $(".tabletitles7").removeClass(` showme`);
        $(".hidespin7").addClass(` showspin`);
        if (box7 === 'boxtable') {
            $(".table7").addClass(` ${box7}`);
            $(".boxseven").addClass(` boxlined`);
            $(".tabletitles7").addClass(` showme`);
        } else if (box7 === 'boxnone') {
            $(".hidespin7").removeClass(` showspin`);
            $(".boxseven").addClass(` ${box7}`);
        } else {
            $(".boxseven").addClass(` ${box7}`);
        };



        const box7table1 = $("input[name='box7tabletitle1']").val();
        $('.box7 .line0 .tabletitle').empty();
        $(`.box7 .line0 .tabletitle`).prepend(`<h4>${box7table1}</h4>`);
        const box7table2 = $("input[name='box7tabletitle2']").val();
        $('.box7 .line1 .tabletitle').empty();
        $(`.box7 .line1 .tabletitle`).prepend(`<h4>${box7table2}</h4>`);
        const box7table3 = $("input[name='box7tabletitle3']").val();
        $('.box7 .line2 .tabletitle').empty();
        $(`.box7 .line2 .tabletitle`).prepend(`<h4>${box7table3}</h4>`);
        const box7table4 = $("input[name='box7tabletitle4']").val();
        $('.box7 .line3 .tabletitle').empty();
        $(`.box7 .line3 .tabletitle`).prepend(`<h4>${box7table4}</h4>`);

        const divnumber8 = $("input[name='divvalue8']").val();
        const box8 = $("select[name='box8type']").val();
        for (i8 = 0; i8 < divnumber8; i8++) {
            if (box8 === 'boxplaque') {
                $(`.box8 .boxwrap`).append(`<div class="boxeight"><h1>00</h1><h4>Header</h4></div>`);
            } else {
                $(`.box8 .boxwrap`).append(`<div class="boxeight"></div>`);
            };
        };

        const box8title = $("input[name='box8title']").val();
        $('#sheet .box8 .boxtitle').empty();
        $(`#sheet .box8 .boxtitle`).prepend(`<h3>${box8title}</h3>`);


        $(".boxeight").removeClass(`boxlined boxnone boximg boxbubbles boxplaque`);
        $(".table8").removeClass(` boxtable`);
        $(".tabletitles8").removeClass(` showme`);
        $(".hidespin8").addClass(` showspin`);
        if (box8 === 'boxtable') {
            $(".table8").addClass(` ${box8}`);
            $(".boxeight").addClass(` boxlined`);
            $(".tabletitles8").addClass(` showme`);
        } else if (box8 === 'boxnone') {
            $(".hidespin8").removeClass(` showspin`);
            $(".boxeight").addClass(` ${box8}`);
        } else {
            $(".boxeight").addClass(` ${box8}`);
        };

        const box8table1 = $("input[name='box8tabletitle1']").val();
        $('.box8 .line0 .tabletitle').empty();
        $(`.box8 .line0 .tabletitle`).prepend(`<h4>${box8table1}</h4>`);
        const box8table2 = $("input[name='box8tabletitle2']").val();
        $('.box8 .line1 .tabletitle').empty();
        $(`.box8 .line1 .tabletitle`).prepend(`<h4>${box8table2}</h4>`);
        const box8table3 = $("input[name='box8tabletitle3']").val();
        $('.box8 .line2 .tabletitle').empty();
        $(`.box8 .line2 .tabletitle`).prepend(`<h4>${box8table3}</h4>`);
        const box8table4 = $("input[name='box8tabletitle4']").val();
        $('.box8 .line3 .tabletitle').empty();
        $(`.box8 .line3 .tabletitle`).prepend(`<h4>${box8table4}</h4>`);
    };

});