(function () {

  let weatherElem = document.querySelector('.weather');
  let sunnyWeather = document.querySelector('.sunny__weather');
  let windyWeather = document.querySelector('.windy__weather');
  let btnSearchSunnyDays = document.querySelector('.weather__filter-sunny');
  let btnSearchWindyDays = document.querySelector('.weather__filter-windy');
  let btnShowAll = document.querySelector('.weather__show-all');


  let Weather = function (temp, wet, wind, typeWeather, descr) {
    this.temp = temp;
    this.wet = wet;
    this.wind = wind;
    this.typeWether = typeWeather;
    this.descr = descr;
    Weather.instances.push(this);
  }
  Weather.instances = [];

  const sunny = new Weather(29, 9, 4, 'images/sun.jpg', 'sunny');
  const sunnySecond = new Weather(28, 8, 5, 'images/sun.jpg', 'sunny');
  const rainy = new Weather(19, 25, 9, 'images/rain.png', 'rainy');
  const windy = new Weather(21, 20, 14, 'images/wind.jpg', 'windy');
  const windySecond = new Weather(22, 23, 12, 'images/wind.jpg', 'windy');

  Weather.instances.forEach((item) => {
    weatherElem.innerHTML += `
        <div class="weather__elem">
          <span class="weather__item"> Температура: ${item.temp}</span>
          <span class="weather__item"> Влажность: ${item.wet}</span>
          <span class="weather__item">Ветренность: ${item.wind}</span>
          <div class="wetaher__image">
            <img src="${item.typeWether}" alt="">
          </div>
        </div>
    `;
  })

  btnSearchSunnyDays.addEventListener('click', () => {
    btnSearchSunnyDays.setAttribute('disabled', true);
    Weather.instances.forEach((item) => {
      if (item.descr === 'sunny') {
        weatherElem.style.display = 'none';
        windyWeather.style.display = 'none';
        sunnyWeather.style.display = 'block';
        sunnyWeather.innerHTML += `
        <div class="weather__elem">
          <span class="weather__item"> Температура: ${item.temp}</span>
          <span class="weather__item"> Влажность: ${item.wet}</span>
          <span class="weather__item">Ветренность: ${item.wind}</span>
          <div class="wetaher__image">
            <img src="${item.typeWether}" alt="">
          </div>
        </div>
    `;
      }
    })
  })

  btnSearchWindyDays.addEventListener('click', () => {
    btnSearchWindyDays.setAttribute('disabled', true);
    Weather.instances.forEach((item) => {
      if (item.descr === 'windy') {
        weatherElem.style.display = 'none';
        sunnyWeather.style.display = 'none';
        windyWeather.style.display = 'block';
        windyWeather.innerHTML += `
        <div class="weather__elem">
          <span class="weather__item"> Температура: ${item.temp}</span>
          <span class="weather__item"> Влажность: ${item.wet}</span>
          <span class="weather__item">Ветренность: ${item.wind}</span>
          <div class="wetaher__image">
            <img src="${item.typeWether}" alt="">
          </div>
        </div>
    `;
      }
    })
  })

  btnShowAll.addEventListener('click', () => {
    btnSearchWindyDays.removeAttribute('disabled');
    btnSearchSunnyDays.removeAttribute('disabled');
    weatherElem.style.display = 'block';
    sunnyWeather.style.display = 'none';
    windyWeather.style.display = 'none';
    windyWeather.innerHTML = '';
    sunnyWeather.innerHTML = '';
  })
})();
