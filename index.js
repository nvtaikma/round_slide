function listen_change_value(idHtml, valueData) {
  valueData.on("value", function (snapshot) {
    const firebaseSliderValue = snapshot.val();
    handleFirebaseSliderValueChange(idHtml, firebaseSliderValue);
  });
}

function query_sliders(id, value) {
  $(document).ready(function () {
    $(`#${id}`).roundSlider({
      circleShape: "half-top",
      sliderType: "min-range",
      handleShape: "dot",
      handleSize: "+5",
      min: 0,
      max: 180,
      width: 25,
      radius: 150,
      value: 0,
      change: function (e) {
        const sliderValue = e.value;
        value.set(sliderValue);
      },
    });
  });
}

function handleFirebaseSliderValueChange(id, newValue) {
  $(`#${id}`).roundSlider("setValue", newValue);
}

module.exports = {
  listen_change_value,
  query_slider,
  handleFirebaseSliderValueChange,
};
