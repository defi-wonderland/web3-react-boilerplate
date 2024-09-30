import { expect } from '@jest/globals';
import { truncateAddress } from '../utils/format';

describe('truncateAddress', () => {
  it('should correctly truncate a long wallet address', () => {
    const address = '0x1234567890abcdef1234567890abcdef12345678';
    expect(truncateAddress(address)).toBe('0x1234...5678');
  });
});
