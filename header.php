<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Transform your business with strategic consultancy excellence. Expert guidance in digital transformation, organizational development, and sustainable growth solutions.">
    <meta name="keywords" content="business consulting, strategic planning, digital transformation, organizational development, management consulting, Africa, Kenya, Tanzania, Uganda">
    <meta name="author" content="ZenInsight Group">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php wp_title('|', true, 'right'); ?>ZenInsight Group - Strategic Consultancy">
    <meta property="og:description" content="Transform your business with strategic consultancy excellence. Expert guidance in digital transformation and sustainable growth solutions.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo esc_url(home_url('/')); ?>">
    <meta property="og:site_name" content="ZenInsight Group">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php wp_title('|', true, 'right'); ?>ZenInsight Group">
    <meta name="twitter:description" content="Transform your business with strategic consultancy excellence in Africa.">
    
    <!-- Canonical Link -->
    <link rel="canonical" href="<?php echo esc_url(home_url('/')); ?>">
    
    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Performance hints -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'zeninsight'); ?></a>

    <header id="masthead" class="site-header" role="banner">
        <div class="header-content">
            <!-- Logo -->
            <?php if (has_custom_logo()): ?>
                <div class="site-branding">
                    <?php the_custom_logo(); ?>
                </div>
            <?php else: ?>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo" rel="home">
                    <div class="logo-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                    </div>
                    <span class="logo-text">
                        ZenInsight<span class="logo-accent">Group</span>
                    </span>
                </a>
            <?php endif; ?>

            <!-- Desktop Navigation -->
            <nav id="site-navigation" class="main-navigation" role="navigation" aria-label="<?php esc_attr_e('Primary Navigation', 'zeninsight'); ?>">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'primary-menu',
                    'menu_class'     => 'nav-menu',
                    'container'      => false,
                    'walker'         => new ZenInsight_Walker_Nav_Menu(),
                    'fallback_cb'    => 'zeninsight_fallback_menu',
                ));
                ?>
            </nav>

            <!-- Mobile Navigation Toggle -->
            <button class="mobile-nav-toggle" aria-controls="mobile-navigation" aria-expanded="false" aria-label="<?php esc_attr_e('Toggle navigation', 'zeninsight'); ?>">
                ☰
            </button>
        </div>
    </header>

    <!-- Mobile Navigation Overlay -->
    <div class="mobile-nav-overlay" id="mobile-navigation" role="navigation" aria-label="<?php esc_attr_e('Mobile Navigation', 'zeninsight'); ?>">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'menu_id'        => 'mobile-menu',
            'menu_class'     => 'mobile-nav-menu',
            'container'      => false,
            'walker'         => new ZenInsight_Walker_Nav_Menu(),
            'fallback_cb'    => 'zeninsight_mobile_fallback_menu',
        ));
        ?>
    </div>

<?php
/**
 * Fallback menu for desktop if no menu is assigned
 */
function zeninsight_fallback_menu() {
    ?>
    <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <?php
}

/**
 * Fallback menu for mobile if no menu is assigned
 */
function zeninsight_mobile_fallback_menu() {
    ?>
    <ul class="mobile-nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <?php
}
?>