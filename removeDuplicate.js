function findAndRemoveDuplicateObjects(jsonArray) {
  const uniqueObjects = new Set(); // Dùng Set để lưu các đối tượng duy nhất
  const duplicates = []; // Mảng để lưu các đối tượng trùng lặp

  const filteredArray = jsonArray.filter((item) => {
    // Chuẩn hóa đối tượng bằng cách chuyển thành chuỗi JSON
    const objectString = JSON.stringify(item);

    // Kiểm tra nếu đối tượng đã tồn tại trong Set
    if (uniqueObjects.has(objectString)) {
      // Nếu đã tồn tại, thêm vào danh sách trùng lặp
      duplicates.push(item);
      return false; // Loại bỏ đối tượng khỏi mảng
    } else {
      // Nếu chưa tồn tại, thêm vào Set
      uniqueObjects.add(objectString);
      return true; // Giữ lại đối tượng
    }
  });

  return {
    uniqueObjects: filteredArray,
    duplicates: duplicates.length > 0 ? duplicates : null
  };
}

// Ví dụ sử dụng
const jsonArray = [
  { question: "What is your name?", answer: "John" },
  { question: "How old are you?", answer: "25" },
  { question: "What is your name?", answer: "John" }, // Trùng lặp toàn bộ
  { question: "Where do you live?", answer: "New York" },
  { question: "How old are you?", answer: "25" } // Trùng lặp toàn bộ
];

const result = findAndRemoveDuplicateObjects(jsonArray);

// Log kết quả
console.log("Danh sách đối tượng duy nhất:", result.uniqueObjects);
console.log(
  "Danh sách đối tượng trùng lặp:",
  result.duplicates || "Không có đối tượng trùng lặp"
);
