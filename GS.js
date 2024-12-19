const imageData = [
    { group: "DDL", answer: "Đóng Dấu Lợn", options: ["Dịch Tả Lợn", "Lở Mồm Long Móng", "Tụ Huyết Trùng Lợn"], message: "Đáp án đúng là Đóng Dấu Lợn" },
    { group: "DTL", answer: "Dịch Tả Lợn", options: ["Đóng Dấu Lợn", "Lở Mồm Long Móng", "Phó Thương Hàn Lợn"], message: "Đáp án đúng là Dịch Tả Lợn" },
    { group: "LMLM", answer: "Lở Mồm Long Móng", options: ["Dịch Tả Lợn", "Tụ Huyết Trùng Lợn", "Phó Thương Hàn Lợn"], message: "Đáp án đúng là Lở Mồm Long Móng" },
    { group: "PTHL", answer: "Phó Thương Hàn Lợn", options: ["Tụ Huyết Trùng Lợn", "Rối Loạn Hô Hấp và Sinh Sản", "Đóng Dấu Lợn"], message: "Đáp án đúng là Phó Thương Hàn Lợn" },
    { group: "RLHH&SS", answer: "Rối Loạn Hô Hấp và Sinh Sản", options: ["Phó Thương Hàn Lợn", "Tụ Huyết Trùng Trâu Bò", "Đóng Dấu Lợn"], message: "Đáp án đúng là Rối Loạn Hô Hấp và Sinh Sản" },
    { group: "THTL", answer: "Tụ Huyết Trùng Lợn", options: ["Dịch Tả Lợn", "Lở Mồm Long Móng", "Phó Thương Hàn Lợn"], message: "Đáp án đúng là Tụ Huyết Trùng Lợn" },
    { group: "THTTB", answer: "Tụ Huyết Trùng Trâu Bò", options: ["Tụ Huyết Trùng Lợn", "Phó Thương Hàn Lợn", "Dịch Tả Lợn"], message: "Đáp án đúng là Tụ Huyết Trùng Trâu Bò" }
];

const images = [
    // Nhóm DDL
    "Gia súc/DDL1.png",
    "Gia súc/DDL2.png",
    "Gia súc/DDL3.png",
    "Gia súc/DDL4.png",
    "Gia súc/DDL5.png",
    "Gia súc/DDL6.png",
    "Gia súc/DDL7.png",
    "Gia súc/DDL8.png",
    "Gia súc/DDL9.png",
    "Gia súc/DDL10.png",
    "Gia súc/DDL11.png",
    "Gia súc/DDL12.png",
    "Gia súc/DDL13.png",
    "Gia súc/DDL14.png",
    "Gia súc/DDL15.png",
    "Gia súc/DDL16.png",

    // Nhóm DTL
    "Gia súc/DTL1.png",
    "Gia súc/DTL2.png",
    "Gia súc/DTL3.png",
    "Gia súc/DTL4.png",
    "Gia súc/DTL5.png",
    "Gia súc/DTL6.png",
    "Gia súc/DTL7.png",
    "Gia súc/DTL8.png",
    "Gia súc/DTL9.png",
    "Gia súc/DTL10.png",
    "Gia súc/DTL11.png",
    "Gia súc/DTL12.png",
    "Gia súc/DTL13.png",
    "Gia súc/DTL14.png",
    "Gia súc/DTL15.png",
    "Gia súc/DTL16.png",
    "Gia súc/DTL17.png",
    "Gia súc/DTL18.png",
    "Gia súc/DTL19.png",
    "Gia súc/DTL20.png",
    "Gia súc/DTL21.png",

    // Nhóm LMLM
    "Gia súc/LMLM1.png",
    "Gia súc/LMLM2.png",
    "Gia súc/LMLM3.png",
    "Gia súc/LMLM4.png",
    "Gia súc/LMLM5.png",
    "Gia súc/LMLM6.png",
    "Gia súc/LMLM7.png",
    "Gia súc/LMLM8.png",
    "Gia súc/LMLM9.png",
    "Gia súc/LMLM10.png",
    "Gia súc/LMLM11.png",
    "Gia súc/LMLM12.png",
    "Gia súc/LMLM13.png",
    "Gia súc/LMLM14.png",
    "Gia súc/LMLM15.png",
    "Gia súc/LMLM16.png",
    "Gia súc/LMLM17.png",
    "Gia súc/LMLM18.png",
    "Gia súc/LMLM19.png",
    "Gia súc/LMLM20.png",
    "Gia súc/LMLM21.png",
    "Gia súc/LMLM22.png",
    "Gia súc/LMLM23.png",
    "Gia súc/LMLM24.png",

    // Nhóm PTHL
    "Gia súc/PTHL1.png",
    "Gia súc/PTHL2.png",
    "Gia súc/PTHL3.png",
    "Gia súc/PTHL4.png",
    "Gia súc/PTHL5.png",
    "Gia súc/PTHL6.png",
    "Gia súc/PTHL7.png",
    "Gia súc/PTHL8.png",
    "Gia súc/PTHL9.png",
    "Gia súc/PTHL10.png",
    "Gia súc/PTHL11.png",
    "Gia súc/PTHL12.png",
    "Gia súc/PTHL13.png",

    // Nhóm RLHH&SS
    "Gia súc/RLHH&SS1.png",
    "Gia súc/RLHH&SS2.png",
    "Gia súc/RLHH&SS3.png",
    "Gia súc/RLHH&SS4.png",

    // Nhóm THTL
    "Gia súc/THTL1.png",
    "Gia súc/THTL2.png",
    "Gia súc/THTL3.png",
    "Gia súc/THTL4.png",
    "Gia súc/THTL5.png",
    "Gia súc/THTL6.png",
    "Gia súc/THTL7.png",

    // Nhóm THTTB
    "Gia súc/THTTB1.png",
    "Gia súc/THTTB2.png",
    "Gia súc/THTTB3.png",
    "Gia súc/THTTB4.png",
    "Gia súc/THTTB5.png",
    "Gia súc/THTTB6.png",
    "Gia súc/THTTB7.png",
    "Gia súc/THTTB8.png"
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
    if (imageName.includes('DDL')) return 0;
    if (imageName.includes('DTL')) return 1;
    if (imageName.includes('LMLM')) return 2;
    if (imageName.includes('PTHL')) return 3;
    if (imageName.includes('RLHH&SS')) return 4;
    if (imageName.includes('THTL')) return 5;
    return 6;
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
