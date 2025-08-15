<?php
/**
 * The front page template file
 *
 * This is the front page template for the ZenInsight Group theme.
 * It displays a one-page layout with all sections.
 *
 * @package ZenInsight
 */

get_header(); ?>

<main id="primary" class="site-main" role="main">
    
    <!-- Hero Section -->
    <section id="home" class="hero-section">
        <div class="hero-content">
            <h1 class="hero-title animate-fade-in">
                <?php echo esc_html(get_theme_mod('hero_title', 'ZenInsight Group')); ?>
            </h1>
            <p class="hero-description animate-fade-in">
                <?php echo esc_html(get_theme_mod('hero_description', 'Pioneering sustainable development across Africa through integrated digital solutions, rigorous monitoring & evaluation, and transformative research.')); ?>
            </p>
            <a href="#about" class="btn btn-primary btn-lg animate-fade-in">
                <?php echo esc_html(get_theme_mod('hero_button_text', 'Discover Our Services')); ?>
            </a>
        </div>
        
        <!-- Scroll Indicator -->
        <div style="position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); color: white; opacity: 0.7;">
            <div style="width: 24px; height: 40px; border: 2px solid white; border-radius: 12px; margin: 0 auto 8px;">
                <div style="width: 4px; height: 8px; background: white; border-radius: 2px; margin: 8px auto; animation: scroll-down 2s infinite;"></div>
            </div>
            <style>
                @keyframes scroll-down {
                    0%, 20% { transform: translateY(0); opacity: 1; }
                    100% { transform: translateY(16px); opacity: 0; }
                }
            </style>
        </div>
    </section>

    <!-- Statistics Section -->
    <section class="section">
        <div class="container">
            <div class="stats-grid">
                <div class="animate-fade-in">
                    <div class="stat-number">250+</div>
                    <div class="stat-label">Projects Completed</div>
                </div>
                <div class="animate-fade-in">
                    <div class="stat-number">98%</div>
                    <div class="stat-label">Client Satisfaction</div>
                </div>
                <div class="animate-fade-in">
                    <div class="stat-number">25+</div>
                    <div class="stat-label">Countries Served</div>
                </div>
                <div class="animate-fade-in">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Expert Consultants</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Include all other sections from index.php -->
    <?php 
    // Get the content from index.php but exclude the opening and closing tags
    $index_content = file_get_contents(get_template_directory() . '/index.php');
    
    // Extract content between the statistics section and the closing main tag
    $start_marker = '<!-- About Section -->';
    $end_marker = '</main>';
    
    $start_pos = strpos($index_content, $start_marker);
    $end_pos = strpos($index_content, $end_marker);
    
    if ($start_pos !== false && $end_pos !== false) {
        $sections_content = substr($index_content, $start_pos, $end_pos - $start_pos);
        echo $sections_content;
    } else {
        // Fallback - include the sections manually
        include locate_template('template-parts/content-about.php');
        include locate_template('template-parts/content-process.php');
        include locate_template('template-parts/content-services.php');
        include locate_template('template-parts/content-careers.php');
        include locate_template('template-parts/content-news.php');
        include locate_template('template-parts/content-contact.php');
    }
    ?>

</main>

<?php get_footer(); ?>