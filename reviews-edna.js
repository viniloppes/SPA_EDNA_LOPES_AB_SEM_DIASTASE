document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("reviews-edna.php");
  const data = await response.json();
  const container = document.getElementById("google-reviews");
  if (!data.result || !data.result.reviews) return;
  data.result.reviews.slice(0, 5).forEach(review => {
    const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.borderRadius = "8px";
    div.style.margin = "10px auto";
    div.style.padding = "15px";
    div.style.background = "#f9f9f9";
    div.style.maxWidth = "600px";
    div.style.textAlign = "left";
    div.innerHTML = `<strong>${review.author_name}</strong><br/><span style="color: gold;">${stars}</span><br/><p>${review.text}</p>`;
    container.appendChild(div);
  });
});