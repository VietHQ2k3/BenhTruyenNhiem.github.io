const imageData = [
    { group: "Avian", answer: "Avian influenza", options: ["Newcastle disease", "Salmonellosis", "Pasteurellosis"], message: "Đáp án đúng là Avian influenza" },
    { group: "DTV", answer: "Dịch tả vịt", options: ["Avian influenza", "Gumboro disease", "Newcastle disease"], message: "Đáp án đúng là Dịch tả vịt" },
    { group: "Gum", answer: "Gumboro disease", options: ["Avian influenza", "Salmonellosis", "Dịch tả vịt"], message: "Đáp án đúng là Gumboro disease" },
    { group: "New", answer: "Newcastle disease", options: ["Pasteurellosis", "Gumboro disease", "Dịch tả vịt"], message: "Đáp án đúng là Newcastle disease" },
    { group: "Pas", answer: "Pasteurellosis", options: ["Newcastle disease", "Salmonellosis", "Avian influenza"], message: "Đáp án đúng là Pasteurellosis" },
    { group: "Sal", answer: "Salmonellosis", options: ["Pasteurellosis", "Dịch tả vịt", "Avian influenza"], message: "Đáp án đúng là Salmonellosis" },
];



const images = [
    // Nhóm Avian
    "Gia cầm/Avian1.png",
    "Gia cầm/Avian17.png",
    "Gia cầm/Avian2.png",
    "Gia cầm/Avian3.png",
    "Gia cầm/Avian4.png",
    "Gia cầm/Avian5.png",
    "Gia cầm/Avian6.png",
    "Gia cầm/Avian7.png",
    "Gia cầm/Avian8.png",
    "Gia cầm/Avian9.png",
    "Gia cầm/Avian10.png",
    "Gia cầm/Avian11.png",
    "Gia cầm/Avian12.png",
    "Gia cầm/Avian13.png",
    "Gia cầm/Avian14.png",
    "Gia cầm/Avian15.png",
    "Gia cầm/Avian16.png",

    // Nhóm DTV
    "Gia cầm/DTV1.png",
    "Gia cầm/DTV13.png",
    "Gia cầm/DTV2.png",
    "Gia cầm/DTV3.png",
    "Gia cầm/DTV4.png",
    "Gia cầm/DTV5.png",
    "Gia cầm/DTV6.png",
    "Gia cầm/DTV7.png",
    "Gia cầm/DTV8.png",
    "Gia cầm/DTV9.png",
    "Gia cầm/DTV10.png",
    "Gia cầm/DTV11.png",
    "Gia cầm/DTV12.png",

    // Nhóm Gum
    "Gia cầm/Gumboro1.png",
    "Gia cầm/Gumboro11.png",
    "Gia cầm/Gumboro2.png",
    "Gia cầm/Gumboro3.png",
    "Gia cầm/Gumboro4.png",
    "Gia cầm/Gumboro5.png",
    "Gia cầm/Gumboro6.png",
    "Gia cầm/Gumboro7.png",
    "Gia cầm/Gumboro8.png",
    "Gia cầm/Gumboro9.png",
    "Gia cầm/Gumboro10.png",

    // Nhóm New
    "Gia cầm/Newcastle1.png",
    "Gia cầm/Newcastle11.png",
    "Gia cầm/Newcastle2.png",
    "Gia cầm/Newcastle3.png",
    "Gia cầm/Newcastle4.png",
    "Gia cầm/Newcastle5.png",
    "Gia cầm/Newcastle6.png",
    "Gia cầm/Newcastle7.png",
    "Gia cầm/Newcastle8.png",
    "Gia cầm/Newcastle9.png",
    "Gia cầm/Newcastle10.png",

    // Nhóm Pas
    "Gia cầm/Pasteurellosis1.png",
    "Gia cầm/Pasteurellosis13.png",
    "Gia cầm/Pasteurellosis2.png",
    "Gia cầm/Pasteurellosis3.png",
    "Gia cầm/Pasteurellosis4.png",
    "Gia cầm/Pasteurellosis5.png",
    "Gia cầm/Pasteurellosis6.png",
    "Gia cầm/Pasteurellosis7.png",
    "Gia cầm/Pasteurellosis8.png",
    "Gia cầm/Pasteurellosis9.png",
    "Gia cầm/Pasteurellosis10.png",
    "Gia cầm/Pasteurellosis11.png",
    "Gia cầm/Pasteurellosis12.png",

    // Nhóm Sal
    "Gia cầm/Salmonellosis1.png",
    "Gia cầm/Salmonellosis12.png",
    "Gia cầm/Salmonellosis2.png",
    "Gia cầm/Salmonellosis3.png",
    "Gia cầm/Salmonellosis4.png",
    "Gia cầm/Salmonellosis5.png",
    "Gia cầm/Salmonellosis6.png",
    "Gia cầm/Salmonellosis7.png",
    "Gia cầm/Salmonellosis8.png",
    "Gia cầm/Salmonellosis9.png",
    "Gia cầm/Salmonellosis10.png",
    "Gia cầm/Salmonellosis11.png",
];


let currentIndex = 0;
let shuffledImages = [];

// Xáo trộn tất cả các hình ảnh
function shuffleImages() {
    const allImages = images.slice(); // Sử dụng .slice() để tạo bản sao của mảng images

    for (let i = allImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allImages[i], allImages[j]] = [allImages[j], allImages[i]]; // Hoán đổi
    }

    shuffledImages = allImages;
    currentIndex = 0;
    showImage(currentIndex);
}

// Cập nhật lại hàm `showImage` để hiển thị hình ảnh từ `shuffledImages`
function showImage(index) {
    const imageElement = document.getElementById("image");
    const answersContainer = document.getElementById("answers");
    const groupIndex = getGroupIndex(index);
    const { answer, options, message } = imageData[groupIndex];
    const allAnswers = [answer, ...options].sort(() => Math.random() - 0.5); // Trộn đáp án

    imageElement.src = shuffledImages[index];
    answersContainer.innerHTML = `
        <h2>Ảnh ${index + 1}</h2> <!-- Hiển thị số thứ tự ảnh -->
        ${allAnswers
            .map((option, i) => `<button class="answer" onclick="selectAnswer('${option}')">${String.fromCharCode(65 + i)}. ${option}</button>`)
            .join("")}
    `;
}

// Lấy nhóm của hình ảnh
function getGroupIndex(index) {
    const imageName = shuffledImages[index];
    if (imageName.includes('Avian')) return 0;
    if (imageName.includes('DTV')) return 1;
    if (imageName.includes('Gum')) return 2;
    if (imageName.includes('New')) return 3;
    if (imageName.includes('Pas')) return 4;
    return 5;
}

// Hiển thị hình ảnh kế tiếp
function showNext() {
    currentIndex = (currentIndex + 1) % shuffledImages.length;
    showImage(currentIndex);
}

// Hiển thị hình ảnh trước đó
function showPrevious() {
    currentIndex = (currentIndex - 1 + shuffledImages.length) % shuffledImages.length;
    showImage(currentIndex);
}

// Hàm chọn đáp án
function selectAnswer(answer) {
    const groupIndex = getGroupIndex(currentIndex);
    const correctAnswer = imageData[groupIndex].answer;
    const message = imageData[groupIndex].message;

    const feedbackContainer = document.getElementById("feedback");

    if (answer === correctAnswer) {
        feedbackContainer.innerHTML = `<p style="color: green;">Chính xác! ${message}</p>`;
        setTimeout(showNext, 1000);
    } else {
        feedbackContainer.innerHTML = `<p style="color: red;">Sai rồi! Đáp án đúng là: ${correctAnswer}</p>`;
    }
}

// Hiển thị hình ảnh đầu tiên khi tải trang
showImage(currentIndex);
