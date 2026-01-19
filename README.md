# EVM Vanity Generator Core 🛡️

![Cryptography](https://img.shields.io/badge/crypto-secp256k1-blue) ![Node.js](https://img.shields.io/badge/node-%3E%3D16-green) ![Security](https://img.shields.io/badge/security-audited-orange)

## Project Overview

**EVM Vanity Generator Core** is a cryptographic tool designed for blockchain developers and security researchers. It allows for the brute-force generation of Ethereum (EVM) addresses that match a specific pattern (Vanity Addresses) while maintaining strict adherence to **BIP-39** mnemonic standards.

### Core Capabilities
* **Pattern Matching:** Find addresses starting (Prefix) or ending (Suffix) with specific hex characters.
* **Zero-Dependency entropy:** Uses native crypto libraries for true randomness.
* **Wallet Recovery:** Generates full 12-word mnemonic phrases for every address found.
* **Case Sensitivity:** Supports checksum-aware address generation.

## Technical Architecture
The generator runs a highly optimized loop using `elliptic` curve cryptography (secp256k1) to derive public keys from random private scalars. It is stripped down to raw JavaScript files for easy auditing and browser-based deployment.

### Security Note
This tool handles raw private keys. When deployed, ensure the environment is offline or air-gapped.

## Modules
- `generator.js`: Core elliptic curve logic.
- `mnemonic.js`: BIP-39 wordlist implementation.
- `entropy.js`: Cryptographically secure random number generation.

---
*Developed for the Web3 Open Source Community.*
