console.log("[Kevin-utube] Bắt đầu tải Theme Switcher...");

function toggleKevinTheme() {
    console.log("[Kevin-utube] Đang thực hiện đổi giao diện...");
    var current = localStorage.getItem('kevin-theme') || 'kid';
    var body = document.body;
    var btn = document.getElementById('kevin-theme-btn');
    
    if(!btn) {
        console.log("[Kevin-utube] Lỗi: Không tìm thấy nút bấm!");
        return;
    }
    
    body.classList.remove('theme-kid', 'theme-cyber');
    
    if (current === 'kid') {
        localStorage.setItem('kevin-theme', 'cyber');
        body.classList.add('theme-cyber');
        btn.innerHTML = '\u26A1 Đổi: Trẻ Em';
        btn.style.background = '#0b0f19';
        btn.style.color = '#00ffff';
        btn.style.borderColor = '#ff00ff';
        console.log("[Kevin-utube] Đã chuyển sang giao diện CYBERPUNK.");
    } else {
        localStorage.setItem('kevin-theme', 'kid');
        body.classList.add('theme-kid');
        btn.innerHTML = '\uD83C\uDF08 Đổi: Cực Ngầu';
        btn.style.background = 'linear-gradient(45deg, #ff9a9e 0%, #fecfef 100%)';
        btn.style.color = '#333';
        btn.style.borderColor = '#fff';
        console.log("[Kevin-utube] Đã chuyển sang giao diện TRẺ EM.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("[Kevin-utube] Trang đã tải xong HTML. Đang gắn sự kiện cho nút...");
    var btn = document.getElementById('kevin-theme-btn');
    if(btn) {
        btn.addEventListener('click', toggleKevinTheme);
    }
    
    // Auto-load theme
    var savedTheme = localStorage.getItem('kevin-theme') || 'cyber';
    localStorage.setItem('kevin-theme', savedTheme === 'kid' ? 'cyber' : 'kid');
    toggleKevinTheme();
});
