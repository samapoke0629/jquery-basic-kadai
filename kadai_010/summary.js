$(document).ready(function() {
    // 文字色変化
    $('#change-color').click(function() {
        $('#target').css('color', 'red'); // 任意の色に変更
    });

    // 文字内容変化
    $('#change-text').click(function() {
        $('#target').text('こんにちは、世界！'); // 任意の文字内容に変更
    });

    // フェードアウト
    $('#fade-out').click(function() {
        $('#target').fadeOut();
    });

    // フェードイン
    $('#fade-in').click(function() {
        $('#target').fadeIn();
    });
});