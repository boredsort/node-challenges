export let direction = {
    EAST: 'EAST',
    WEST: 'WEST',
    NORTH: 'NORTH',
    SOUTH: 'SOUTH'
}

export let pathDirection = {
    SOUTH: {
        d:"M 92.169 82.262 L 92.169 63.462 C 92.169 54.196 90.843 47.397 86.394 42.532 C 81.83 37.564 74.878 35.42 63.936 35.867 L 54.221 35.867 L 54.221 27.469 C 54.164 26.356 53.773 25.563 53.049 25.101 C 51.232 23.935 49.437 25.319 48.13 26.437 C 44.362 29.67 31.944 38.852 29.838 40.608 C 28.378 41.718 28.378 43.85 29.838 44.959 C 31.902 46.637 43.883 55.427 47.759 58.81 C 49.132 59.995 51.079 61.735 53.049 60.473 C 53.773 60.01 54.164 59.217 54.221 58.099 L 54.221 48.638 L 63.936 48.638 L 64.22 48.638 C 70.929 48.34 74.688 49.091 76.426 50.998 C 78.315 53.064 78.885 57.269 78.885 63.486 L 78.885 82.262 L 92.169 82.262 Z",  transform:"matrix(0, -1, 1, 0, 6.995607, 113.916391)"},
    WEST: { d:"M 92.169 82.262 L 92.169 63.462 C 92.169 54.196 90.843 47.397 86.394 42.532 C 81.83 37.564 74.878 35.42 63.936 35.867 L 54.221 35.867 L 54.221 27.469 C 54.164 26.356 53.773 25.563 53.049 25.101 C 51.232 23.935 49.437 25.319 48.13 26.437 C 44.362 29.67 31.944 38.852 29.838 40.608 C 28.378 41.718 28.378 43.85 29.838 44.959 C 31.902 46.637 43.883 55.427 47.759 58.81 C 49.132 59.995 51.079 61.735 53.049 60.473 C 53.773 60.01 54.164 59.217 54.221 58.099 L 54.221 48.638 L 63.936 48.638 L 64.22 48.638 C 70.929 48.34 74.688 49.091 76.426 50.998 C 78.315 53.064 78.885 57.269 78.885 63.486 L 78.885 82.262 L 92.169 82.262 Z",transform:"matrix(-1, 0, 0, -1, 120.911999, 106.920784)"},
    NORTH: { d:"M 92.169 82.262 L 92.169 63.462 C 92.169 54.196 90.843 47.397 86.394 42.532 C 81.83 37.564 74.878 35.42 63.936 35.867 L 54.221 35.867 L 54.221 27.469 C 54.164 26.356 53.773 25.563 53.049 25.101 C 51.232 23.935 49.437 25.319 48.13 26.437 C 44.362 29.67 31.944 38.852 29.838 40.608 C 28.378 41.718 28.378 43.85 29.838 44.959 C 31.902 46.637 43.883 55.427 47.759 58.81 C 49.132 59.995 51.079 61.735 53.049 60.473 C 53.773 60.01 54.164 59.217 54.221 58.099 L 54.221 48.638 L 63.936 48.638 L 64.22 48.638 C 70.929 48.34 74.688 49.091 76.426 50.998 C 78.315 53.064 78.885 57.269 78.885 63.486 L 78.885 82.262 L 92.169 82.262 Z", transform:"matrix(0, 1, -1, 0, 113.916391, -6.995607)"},
    EAST: <path d="M 98.523 87.557 L 98.523 65.646 C 98.523 54.847 96.915 46.923 91.522 41.252 C 85.989 35.464 77.561 32.964 64.296 33.485 L 52.52 33.485 L 52.52 23.698 C 52.45 22.402 51.975 21.476 51.098 20.938 C 48.896 19.579 46.719 21.193 45.135 22.495 C 40.567 26.263 25.512 36.964 22.96 39.012 C 21.189 40.305 21.189 42.79 22.96 44.082 C 25.463 46.038 39.986 56.282 44.685 60.223 C 46.349 61.606 48.709 63.632 51.098 62.163 C 51.975 61.624 52.45 60.699 52.52 59.396 L 52.52 48.37 L 64.296 48.37 L 64.64 48.37 C 72.774 48.023 77.33 48.897 79.438 51.12 C 81.728 53.527 82.418 58.429 82.418 65.675 L 82.418 87.557 L 98.523 87.557 Z" />
}