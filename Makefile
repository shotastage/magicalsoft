.PHONY:
cargo-setup:
	cargo install wasm-pack


.PHONY:
build:
	wasm-pack build --target web --out-name wasm --out-dir ./static
#   wasm-pack build --target web --release
#	wasm-pack build --target web
