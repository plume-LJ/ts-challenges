import pygame
import math

pygame.init()

# Set up the display window
size = (400, 400)
screen = pygame.display.set_mode(size)
pygame.display.set_caption("Beating Heart")

# Set up the initial position of the heart
x = size[0] // 2
y = size[1] // 2
radius = 50
t = 0

clock = pygame.time.Clock()

# Run the main game loop
running = True
while running:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Update the position of the heart
    t += 0.05
    x = size[0] // 2 + 50 * (2 * math.sin(t) ** 3)
    y = size[1] // 2 - 40 * (math.cos(t) - math.sin(t) ** 2)

    # Clear the screen
    screen.fill((255, 255, 255))

    # Draw the heart
    pygame.draw.circle(screen, (255, 0, 0), (x - radius // 2, y - radius // 2), radius // 2)
    pygame.draw.circle(screen, (255, 0, 0), (x + radius // 2, y - radius // 2), radius // 2)
    pygame.draw.polygon(screen, (255, 0, 0), [(x - radius // 2, y), (x + radius // 2, y), (x, y + radius)])

    # Update the screen
    pygame.display.flip()

    # Wait for a short amount of time
    clock.tick(60)

# Clean up the pygame module
pygame.quit()
