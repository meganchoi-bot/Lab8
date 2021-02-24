const formatVolumeIconPath= require('../assets/scripts/main');
test('volumeValue > 66 is icon 3', () => {
    expect(formatVolumeIconPath(67)).toMatch("./assets/media/icons/volume-level-3.svg");
});
test('volumeValue > 66 is icon 3', () => {
    expect(formatVolumeIconPath(200)).toMatch("./assets/media/icons/volume-level-3.svg");
});
test('volumeValue > 33 is icon 2', () => {
    expect(formatVolumeIconPath(66)).toMatch("./assets/media/icons/volume-level-2.svg");
});
test('volumeValue > 0 is icon 1', () => {
    expect(formatVolumeIconPath(1)).toMatch("./assets/media/icons/volume-level-1.svg");
});
test('volumeValue <= 0 is icon 0', () => {
    expect(formatVolumeIconPath(0)).toMatch("./assets/media/icons/volume-level-0.svg");
});
test('volumeValue <= 0 is icon 0', () => {
    expect(formatVolumeIconPath(-2)).toMatch("./assets/media/icons/volume-level-0.svg");
});