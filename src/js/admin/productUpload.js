const API_URL = "https://glozin-backend.onrender.com/";

document.addEventListener("DOMContentLoaded", () => {
  const addButtonElement = document.getElementById("addButton");
  const colorsContainerElement = document.getElementById("colorsContainer");
  const colorElement = document.getElementById("color");

  const colors = {};

  // Renk ve dosyaları yakalayan fonksiyon
  const handleFileUpload = (event) => {
    const target = event.target;
    const color = target.dataset.color;
    colors[color] = Array.from(target.files); // FileList'i diziye çevir
  };

  // Renk input alanı oluşturma
  const colorInputContainer = (color) => {
    const container = document.createElement("div");
    container.classList.add("d-flex", "gap-3", "align-items-center");

    const colorLabel = document.createElement("p");
    colorLabel.style.color = color;
    colorLabel.className = "text-capitalize form-label";
    colorLabel.textContent = color;

    const colorInput = document.createElement("input");
    colorInput.dataset.color = color;
    colorInput.style.width = "250px";
    colorInput.type = "file";
    colorInput.multiple = true;
    colorInput.className = "form-control";

    colorInput.addEventListener("change", handleFileUpload);

    container.appendChild(colorLabel);
    container.appendChild(colorInput);

    return container;
  };

  // Renk ekleme butonuna tıklama olayı
  addButtonElement.addEventListener("click", () => {
    const color = colorElement.value.toLowerCase();
    if (color) {
      colorsContainerElement.appendChild(colorInputContainer(color));
      colors[color] = []; // Renk girişini sıfırla
      colorElement.value = ""; // Renk girişini temizle
    }
  });

  // Form verilerini okuma fonksiyonu
  const readFormData = () => {
    const formData = new FormData();

    // Form elemanlarından verileri ekleyin
    formData.append("brand", document.getElementById("brand").value);
    formData.append("title", document.getElementById("title").value);
    formData.append(
      "description",
      document.getElementById("description").value
    );
    formData.append("price", document.getElementById("price").value);
    formData.append(
      "discountPercentage",
      document.getElementById("discountPercentage").value
    );
    formData.append("sku", document.getElementById("sku").value);
    formData.append("stock", document.getElementById("stock").value);
    formData.append("colors", JSON.stringify(Object.keys(colors)));

    // Renkler ve dosyalar

    for (const color in colors) {
      if (colors[color] && colors[color].length > 0) {
        for (const file of colors[color]) {
          console.log(color, file); // Burada hangi dosyanın gönderildiğini görebilirsiniz
          formData.append(`photos[${color}]`, file); // Renk ile dosyayı eşleştir
        }
      }
    }

    uploadProduct(formData);
  };

  // Ürün oluşturma butonuna tıklama olayı
  document
    .querySelector("#createProductButton")
    .addEventListener("click", (event) => {
      event.preventDefault(); // Formun varsayılan gönderimini engelle
      readFormData(); // Form verilerini oku
    });
});

async function uploadProduct(formData) {
  try {
    const res = await fetch(
      "https://bramble-blue-venom.glitch.me/api/admin/product",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
