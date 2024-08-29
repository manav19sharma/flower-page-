document.addEventListener("DOMContentLoaded", function() {
    // Function to show text line by line
    function showText() {
        const textElement = document.getElementById('text');
        const textLines = [
            "hey qutuuuuu",
            " I WANT TO TELL U ",
            "THAT ",
            "I LOVE U ANJALI ",
            "babyyyy U R THE BESTEST PART OF MY EVERYDAY ",
            "DEKH MEIN ABHI BAS APNI FEELINGS KO EXPLAIN NHI KR SKTA  ",
            "MEI BAS TUJHE FEEL KRVANA CHAHTA HU KI MEI TUJHSE PYAR KRTA HU",
            "I LOVE U ANJALI ",
            "DEKH MEIN EFFORTS KRTA HU BAS TARIKA ALAG H ",
            "AND I REALLY TRY TO LOVE U THE WAY U WANT TO BE LOVED ",
            "DEKH I NEED A HUG !!!!!!!!!!!!!!!!",
            "I WANT MY RIGHTSS!!!!!!!!!!!!!!!!",
            "MY SWEETUUUU",
            "MY LOVE MY ANJALI ,I LOVE U BABY",
        ];

        let currentLine = 0;
        textElement.innerHTML = ''; // Clear the text container

        function displayLine() {
            if (currentLine < textLines.length) {
                textElement.innerHTML += textLines[currentLine] + '<br>';
                currentLine++;
                setTimeout(displayLine, 1000); // Adjust delay as needed
            }
        }

        displayLine();
    }

    // Delay showing text to give time to admire the flowers
    setTimeout(function() {
        document.getElementById('flowers').style.display = 'none';
        document.getElementById('text').style.display = 'block';
        showText();
    }, 5000); // 5 seconds delay
});
