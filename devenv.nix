{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  packages = with pkgs; [
    biome
  ];

  languages.javascript = {
    bun = {
      enable = true;
      install.enable = true;
    };
  };

  scripts = {
    biome-check = {
      exec = ''
        biome check .
      '';
      packages = [ pkgs.biome ];
      description = "Run checks using biome";
    };
    biome-fix = {
      exec = ''
        biome check --write .
      '';
      packages = [ pkgs.biome ];
      description = "Run fixes using biome";
    };
  };
}
