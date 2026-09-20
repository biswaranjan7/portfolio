async function main() {
  const res = await fetch('https://www.coursera.org/account/accomplishments/specialization/L7XQIDUJBR2J', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const text = await res.text();
  const partnerMatch = text.match(/"partners":\[([^\]]+)\]/);
  console.log('Partners:', partnerMatch ? partnerMatch[1] : null);
  const instructor = text.match(/"instructors":\[([^\]]+)\]/);
  console.log('Instructors:', instructor ? instructor[1] : null);
  // find Stanford or DeepLearning.AI
  console.log('Has Stanford:', text.includes('Stanford'));
  console.log('Has DeepLearning.AI:', text.includes('DeepLearning'));
}
main();
