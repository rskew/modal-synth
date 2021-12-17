{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/a5b49f272ff1c4d6392385db2cbd4f764f46b85c.tar.gz") {}
}:

pkgs.stdenv.mkDerivation {
  name = "modal-synth";
  buildInputs = [
    (pkgs.leiningen.override { jdk = pkgs.jdk8; })
  ];
}
