// Задача 3. Профіль гравця
// Об'єкт profile описує профіль користувача на ігровій платформі.
// У його властивостях зберігається ім'я профілю username та кількість активних годин playTime, проведених у грі.
const profile = {
    username: "Jacob",
    playTime: 300,
    // Метод changeUsername(newName) повинен приймати рядок(нове ім’я) в параметр newName
    // та змінювати значення властивості username на нове.Нічого не повертає.
    changeUsername(newName) {
        this.username = newName;
        
    },
    // Метод updatePlayTime(hours) повинен приймати число(кількість годин) у параметр hours
    // та збільшити на нього значення властивості playTime.Нічого не повертає.
    updatePlayTime(hours) {
        this.playTime += hours;
    },

    // Метод getInfo() має повертати рядок формату < Username > has < amount > active hours!,
    // де < Username > — це ім’я профілю, а < amount > — кількість ігрових годин.
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`
},
    }

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"