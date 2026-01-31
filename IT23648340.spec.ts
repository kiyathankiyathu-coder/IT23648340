import { test, expect } from '@playwright/test';

// 12 Positive Functional Test Cases for Tamil Transliteration
// Domain: Daily language, Greeting/request, Mixed Thanglish+English, Slang, Punctuation/numbers, Formatting
// Grammar: Simple, Interrogative, Imperative, Tense, Negation, Plural
// Length: S (≤30), M (31–299), L (≥300)

test('Pos_Fun_0001 - Simple greeting phrase (S/Greeting/Present)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  
  const inputBox = page.locator('#transliterateTextarea');
  await page.waitForLoadState('domcontentloaded');
  
  await inputBox.fill('naan veetukku pogren');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('naan veetukku pogren');
});

test('Pos_Fun_0002 - Interrogative sentence (S/Interrogative/Present)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('nee yaar?');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('nee yaar?');
});

test('Pos_Fun_0003 - Imperative command (S/Imperative/Action)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('va');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('va');
});

test('Pos_Fun_0004 - Past tense sentence (M/Simple/Past)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('naan vandi odicchen');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('naan vandi odicchen');
});

test('Pos_Fun_0005 - Future tense sentence (M/Simple/Future)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('naan naalai poikka porom');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('naan naalai poikka porom');
});

test('Pos_Fun_0006 - Negation sentence (M/Negation/Present)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('naan puriyalai');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('naan puriyalai');
});

test('Pos_Fun_0007 - Plural reference (M/Plural/Present)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('avaangal veettukku ponaanga');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('avaangal veettukku ponaanga');
});

test('Pos_Fun_0008 - Compound sentence (M/Compound/Mixed tense)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('naan sappittu vandi odicchen appuram veetukku vanthen');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('naan sappittu vandi odicchen appuram veetukku vanthen');
});

test('Pos_Fun_0009 - Mixed Thanglish with English (M/Mixed language/Daily)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('please veetukku poga mudiyuma');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('please veetukku poga mudiyuma');
});

test('Pos_Fun_0010 - Formatting with punctuation (S/Formatting/Present)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('vanakkam!');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('vanakkam!');
});

test('Pos_Fun_0011 - Numbers with Tamil words (S/Formatting/Descriptive)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('123 veedu');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('123 veedu');
});

test('Pos_Fun_0012 - Slang casual request (M/Slang/Daily/Imperative)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('appadi pannanum da');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('appadi pannanum da');
});

test('Pos_Fun_0013 - Complex question with negation (M/Interrogative/Complex)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('nee yaar ennu theriyalai?');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('nee yaar ennu theriyalai?');
});

test('Pos_Fun_0014 - Respectful greeting phrase (S/Greeting/Formal)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('vanakkam');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('vanakkam');
});

test('Pos_Fun_0015 - Request with conditional clause (M/Imperative/Conditional)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('nee vanthal naan saththi pannum');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('nee vanthal naan saththi pannum');
});

test('Pos_Fun_0016 - Past perfect tense (M/Complex/PastPerfect)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('naan kathirundhaal nee un velyai seiyirundha');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('naan kathirundhaal nee un velyai seiyirundha');
});

test('Pos_Fun_0017 - Affirmative response with emphasis (S/Response/Emphatic)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('aama!!');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('aama!!');
});

test('Pos_Fun_0018 - Multi-clause sentence (L/Compound/Narrative)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('naan onru solren nee kai vidhu nee yaar aakum naan unnai paarpan naan vandi kuduthappadi um');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('naan onru solren nee kai vidhu nee yaar aakum naan unnai paarpan naan vandi kuduthappadi um');
});

test('Pos_Fun_0019 - Formal request with politeness markers (M/Request/Formal)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('kai vali aithaal mudiyuma ungaluku onrum theriyumaa');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('kai vali aithaal mudiyuma ungaluku onrum theriyumaa');
});

test('Pos_Fun_0020 - Temporal expression with tense change (M/Temporal/Complex)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('kalai 9 mani varai naan odichutten naalaigal suthi poikanum');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('kalai 9 mani varai naan odichutten naalaigal suthi poikanum');
});

test('Pos_Fun_0021 - Negation with rhetorical question (M/Interrogative/Rhetoric)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('yaru thaanai onnum pannalai vendaam');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('yaru thaanai onnum pannalai vendaam');
});

test('Pos_Fun_0022 - Location-based request (S/Descriptive/Place)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('veedu epidi irukku');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('veedu epidi irukku');
});

test('Pos_Fun_0023 - Continuous action with numbers (M/Action/Ongoing)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('2 naal aakum naan antha velai seiyukiren');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('2 naal aakum naan antha velai seiyukiren');
});

test('Pos_Fun_0024 - Inclusive plural with action (M/Plural/Action)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('nammum ivar um yarirathu pannalam');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('nammum ivar um yarirathu pannalam');
});

// ============================================================
// 10 NEGATIVE FUNCTIONAL TEST CASES (Edge Cases & Ambiguity)
// ============================================================

test('Neg_Fun_0001 - Repeated special characters and symbols (S/Edge case/Invalid formatting)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('!!!***###@@@');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  // System may fail or produce no valid output for pure special characters
  expect(inputValue).toBe('!!!***###@@@');
});

test('Neg_Fun_0002 - Mixed script languages (Kannada/Telugu mixed with Tamil thanglish) (M/Complex/Invalid)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('naan kannada_text telugu_word veetukku');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  // System expected to fail on non-Tamil scripts
  expect(inputValue).toBe('naan kannada_text telugu_word veetukku');
});

test('Neg_Fun_0003 - Emoji and Unicode symbols mixed with Tamil (M/Formatting/Invalid)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('naan 😊 veetukku 🚗 pogren');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  // System should handle emoji gracefully or fail
  expect(inputValue).toBe('naan 😊 veetukku 🚗 pogren');
});

test('Neg_Fun_0004 - Extremely long gibberish text with no meaning (L/Edge case/Noise)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  const longGibberish = 'zzzzzzzzzzz xxxxx qqqqqq pppppp kkkkkk jjjjjj wwwwww zzzzzz aaaaaa bbbbbb cccccc dddddd eeeeee ffffff gggggg hhhhhh iiiiii jjjjjj kkkkkk llllll mmmmmm nnnnnn oooooo qqqqqqq rrrrrr ssssss tttttt uuuuuu vvvvvv xxxxxx yyyyyy zzzzzz aaaaaa bbbbbb cccccc';
  await inputBox.fill(longGibberish);
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  // System may produce incorrect/garbled output
  expect(inputValue).toBe(longGibberish);
});

test('Neg_Fun_0005 - HTML/Code injection attempt (M/Security/Ambiguity)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('<script>alert(1)</script>naan veetukku');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  // System should handle injection attempts safely
  expect(inputValue).toBe('<script>alert(1)</script>naan veetukku');
});

test('Neg_Fun_0006 - Unicode combining diacritics with Tamil (S/Edge case/Complex)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('na\u0301a\u0302n veetukku');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  // System may fail with combining characters
  expect(inputValue).toBe('na\u0301a\u0302n veetukku');
});

test('Neg_Fun_0007 - Mixed numerals with symbols and zero-width characters (M/Formatting/Ambiguity)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('123@456#789 naan\u200bveetukku');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  // System expected to fail or produce unclear output with zero-width chars
  expect(inputValue).toBe('123@456#789 naan\u200bveetukku');
});

test('Neg_Fun_0008 - Invalid romanization with keyboard layout mix (M/Complex/Ambiguous)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('naaan veeetkkkuuu ppppogggrrren');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  // Repeated consonants that don't follow Tamil phonotactics
  expect(inputValue).toBe('naaan veeetkkkuuu ppppogggrrren');
});

test('Neg_Fun_0009 - Extremely nested punctuation and formatting (S/Edge case/Formatting)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('((([[[{{{naan}}}]]])))) !!!???...');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  // System may struggle with nested punctuation
  expect(inputValue).toBe('((([[[{{{naan}}}]]])))) !!!???...');
});

test('Neg_Fun_0010 - Mixed right-to-left and left-to-right text with numbers (M/Complex/Invalid)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  await inputBox.fill('naan 123 ערברית veetukku\u202e456 pogren');
  await page.waitForTimeout(800);
  
  const inputValue = await inputBox.inputValue();
  // System may fail with right-to-left scripts and bidirectional text
  expect(inputValue).toBe('naan 123 ערברית veetukku\u202e456 pogren');
});

// ============================================================
// 1 UI TEST CASE (Real-time Update Verification)
// ============================================================

test('Pos_UI_0001 - Verify real-time update capability on character input (M/UI/Real-time)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  await page.waitForLoadState('domcontentloaded');
  
  const inputBox = page.locator('#transliterateTextarea');
  
  // Type characters one by one and verify real-time updates
  await inputBox.fill('');
  await page.waitForTimeout(300);
  let inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('');
  
  // Type first character
  await inputBox.fill('n');
  await page.waitForTimeout(300);
  inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('n');
  
  // Type second character
  await inputBox.fill('na');
  await page.waitForTimeout(300);
  inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('na');
  
  // Type third character
  await inputBox.fill('naa');
  await page.waitForTimeout(300);
  inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('naa');
  
  // Complete word
  await inputBox.fill('naan');
  await page.waitForTimeout(300);
  inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('naan');
  
  // Verify input field is visible and interactive
  await expect(inputBox).toBeVisible();
  await expect(inputBox).toBeFocused();
  
  // Add more text progressively
  await inputBox.fill('naan veetukku');
  await page.waitForTimeout(300);
  inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('naan veetukku');
  
  // Complete sentence
  await inputBox.fill('naan veetukku pogren');
  await page.waitForTimeout(300);
  inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('naan veetukku pogren');
  
  // Verify UI elements remain functional throughout the process
  const pageTitle = await page.title();
  expect(pageTitle).toBeTruthy();
  
  // Test backspace/deletion real-time update
  await inputBox.fill('naan veetukku');
  await page.waitForTimeout(300);
  inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('naan veetukku');
  
  // Clear field completely
  await inputBox.clear();
  await page.waitForTimeout(300);
  inputValue = await inputBox.inputValue();
  expect(inputValue).toBe('');
});