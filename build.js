// content/posts 폴더 안의 글 파일들을 하나로 합쳐서
// 홈페이지가 읽는 content/posts.json을 자동 생성합니다.
const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'content', 'posts');
const outFile = path.join(__dirname, 'content', 'posts.json');

let posts = [];
if (fs.existsSync(postsDir)) {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.json'));
  posts = files.map(f => JSON.parse(fs.readFileSync(path.join(postsDir, f), 'utf8')));
}

fs.writeFileSync(outFile, JSON.stringify({ posts }, null, 2));
console.log(`content/posts.json 생성 완료 - 글 ${posts.length}개`);
