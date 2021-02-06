<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Off the Hook</title>
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/script.js"></script>
</head>
<body>
<div class="block-main">
    <div class="block-content-page">
        <?php include 'header.php'; ?>
        <div class="block-contact">
            <div class="block-contact__stayInTouch">
                <div class="block-contact__textForThisBlockContact">
                    <span class="block-contact__titleForLastBlock" >
                        Stay<br>
                        in<br>
                        Touch
                    </span>
                    <div class="block-contact__subTitleBlockContact">
                        <p class="block-contact__textAboutBlockContact">
                            I'm a paragraph. Click here to add<br> your own text and edit me. It’s easy.<br>
                            Just click “Edit Text” or double click<br> me to add your own content and<br> make changes to the font.
                        </p>
                    </div>
                </div>
            </div>
            <div class="block-contact__lastImage">
                <img class="block-contact__fishImg" src="./img/block-contact.jpg.webp" alt="">
            </div>
            <div class="block-contact__formBlock2">
                <form class="block-contact__registration1" action="javascript: void(0)">
                    <input class="block-contact__formInputBlack" id="contactName" type="text" placeholder="Name">
                    <input class="block-contact__formInputBlack" id="contactEmail" type="email" placeholder="Email">
                    <input class="block-contact__formInputBlack" id="contactPhone" type="tel" placeholder="Phone">
                    <input class="block-contact__formBigInput" id="contactMessage" type="text" placeholder="Type you message here">
                    <button class="block-contact__buttonLastBlock">
                        <span class="block-contact__textForButton1">
                            Submit
                        </span>
                    </button>
                </form>
            </div>
        </div>
        <?php include 'footer.php'; ?>
    </div>
</div>
</body>
</html>