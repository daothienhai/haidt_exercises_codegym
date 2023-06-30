const animals = new Set(["Cat", "Pig", "Monkey"]);
animals.add("Dog"); // Thêm 1 loài vật mới vào danh sách
animals.has("Dog"); // Kiểm tra xem loài vật mới đã có trong danh sách chưa
animals.delete("Cat"); // Xóa một loài động vật khỏi danh sách

const newAnimals = [...animals];
console.log(animals);
console.log(newAnimals);
