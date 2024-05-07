const months = document.querySelector('.months');
const days = document.querySelector('.day');
const hours = document.querySelector('.hours');


const currentDate = new Date();


const yesterday = new Date('2024-02-10T24:00:00');


const monthDiff = currentDate.getMonth() - yesterday.getMonth() + (12 * (currentDate.getFullYear() - yesterday.getFullYear()));
const dayDiff = Math.floor((currentDate - yesterday) / (1000 * 60 * 60 * 24)); // Calculate days
const hourDiff = (currentDate - yesterday) / (1000 * 60 * 60); // Calculate hours


months.innerHTML = monthDiff;
days.innerHTML = dayDiff;
hours.innerHTML = hourDiff.toFixed(1);
