// Simple script to simulate uploading images for portfolio updates
document.querySelector('#upload-btn').addEventListener('click', function() {
    alert('Upload new image feature is coming soon!');
});
<script>
    // JavaScript untuk menangani upload gambar dan preview
    const imageInput = document.getElementById('imageInput');
    const preview = document.getElementById('preview');

    imageInput.addEventListener('change', function() {
        const file = this.files[0];  // Mengambil file yang dipilih

        if (file) {
            const reader = new FileReader();  // Membuat objek FileReader

            reader.addEventListener('load', function() {
                // Mengubah sumber gambar (src) di tag <img> menjadi hasil dari FileReader
                preview.src = this.result;
            });

            // Membaca file gambar sebagai Data URL (base64)
            reader.readAsDataURL(file);
        }
    });
</script>
