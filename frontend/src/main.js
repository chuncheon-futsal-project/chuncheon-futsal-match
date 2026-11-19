import './style.css';

async function getHello() {
    try {
        const response = await fetch('http://localhost:8080/api/hello');

        if (!response.ok) {
            throw new Error(`HTTP 오류: ${response.status}`);
        }

        const data = await response.text();

        document.getElementById('result').textContent = data;
    } catch (error) {
        console.error(error);
        document.getElementById('result').textContent = '서버 연결 실패';
    }
}

document.getElementById('helloButton').addEventListener('click', getHello);