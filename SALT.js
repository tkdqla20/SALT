state = 0;



function changeImage() {



    if ( state == 0 ) {

        state = 1;

        document.getElementById('image').src = "002.png";

    }

    else {

        state = 0;

        document.getElementById('image').src = "001.png";

    }

}