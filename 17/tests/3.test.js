const mod = require('../src/js/3');

test('fab1~5',()=>{
    expect(mod.fab(1)).toBe(1)
    expect(mod.fab(2)).toBe(1)
    expect(mod.fab(3)).toBe(2)
    expect(mod.fab(4)).toBe(3)
});
test('fab 7',()=>{
    expect(mod.fab(7)).toBe(13)     //期待fab(7) 可以给我一个13这个结果
});


// 如果单元测试报错 报错信息：
// ✕ fab1~5 (6ms)   未通过
// ✓ fab 7          通过

// ● fab1~5

//   expect(received).toBe(expected) // Object.is equality

//   Expected: 5        期待5 是错误的
//   Received: 3        正确应该3
// at Object.test (tests/webpack:/tests/3.test.js:7:1)  在第七行