<?php
/**
 * ZenInsight Group functions and definitions
 *
 * @package ZenInsight
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function zeninsight_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');

    // Add theme support for selective refresh for widgets.
    add_theme_support('customize-selective-refresh-widgets');

    // Add support for core custom logo.
    add_theme_support('custom-logo', array(
        'height'      => 250,
        'width'       => 250,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // This theme uses wp_nav_menu() in one location.
    register_nav_menus(array(
        'primary' => esc_html__('Primary', 'zeninsight'),
    ));

    // Switch default core markup for search form, comment form, and comments
    // to output valid HTML5.
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Add support for editor styles.
    add_theme_support('editor-styles');

    // Enqueue editor styles.
    add_editor_style('style.css');

    // Add support for responsive embedded content.
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'zeninsight_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 */
function zeninsight_content_width() {
    $GLOBALS['content_width'] = apply_filters('zeninsight_content_width', 1280);
}
add_action('after_setup_theme', 'zeninsight_content_width', 0);

/**
 * Enqueue scripts and styles.
 */
function zeninsight_scripts() {
    wp_enqueue_style('zeninsight-style', get_stylesheet_uri(), array(), '1.0.0');

    // Add smooth scrolling and navigation functionality
    wp_enqueue_script('zeninsight-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '1.0.0', true);
    
    // Add smooth scrolling polyfill for older browsers
    wp_enqueue_script('zeninsight-smooth-scroll', get_template_directory_uri() . '/js/smooth-scroll.js', array(), '1.0.0', true);

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'zeninsight_scripts');

/**
 * Add custom JavaScript for smooth scrolling and navigation
 */
function zeninsight_add_custom_scripts() {
    ?>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.site-header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header scroll effect
        const header = document.querySelector('.site-header');
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        
        window.addEventListener('scroll', handleScroll);

        // Active section highlighting
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.nav-menu a');
        
        const highlightActiveSection = () => {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navItems.forEach(item => {
                        item.classList.remove('active');
                        if (item.getAttribute('href') === '#' + sectionId) {
                            item.classList.add('active');
                        }
                    });
                }
            });
        };
        
        window.addEventListener('scroll', highlightActiveSection);

        // Mobile navigation toggle
        const mobileToggle = document.querySelector('.mobile-nav-toggle');
        const mobileOverlay = document.querySelector('.mobile-nav-overlay');
        
        if (mobileToggle && mobileOverlay) {
            mobileToggle.addEventListener('click', function() {
                mobileOverlay.classList.toggle('active');
                this.textContent = mobileOverlay.classList.contains('active') ? '×' : '☰';
            });

            // Close mobile nav when clicking on a link
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileOverlay.classList.remove('active');
                    mobileToggle.textContent = '☰';
                });
            });

            // Close mobile nav when clicking on overlay
            mobileOverlay.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                    mobileToggle.textContent = '☰';
                }
            });
        }

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe all elements with animation classes
        const animatedElements = document.querySelectorAll('[class*="animate-"]');
        animatedElements.forEach(el => observer.observe(el));

        // Form handling
        const contactForm = document.querySelector('form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic form validation
                const required = this.querySelectorAll('[required]');
                let isValid = true;
                
                required.forEach(field => {
                    if (!field.value.trim()) {
                        field.style.borderColor = 'hsl(0, 84%, 60%)';
                        isValid = false;
                    } else {
                        field.style.borderColor = '';
                    }
                });
                
                if (isValid) {
                    // Show success message (you can implement actual form submission here)
                    alert('Thank you for your message! We will get back to you soon.');
                    this.reset();
                } else {
                    alert('Please fill in all required fields.');
                }
            });
        }
    });
    </script>
    <?php
}
add_action('wp_footer', 'zeninsight_add_custom_scripts');

/**
 * Customizer additions.
 */
function zeninsight_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('zeninsight_hero', array(
        'title'    => __('Hero Section', 'zeninsight'),
        'priority' => 30,
    ));

    // Hero Title
    $wp_customize->add_setting('hero_title', array(
        'default'           => 'ZenInsight Group',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_title', array(
        'label'   => __('Hero Title', 'zeninsight'),
        'section' => 'zeninsight_hero',
        'type'    => 'text',
    ));

    // Hero Description
    $wp_customize->add_setting('hero_description', array(
        'default'           => 'Pioneering sustainable development across Africa through integrated digital solutions, rigorous monitoring & evaluation, and transformative research.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('hero_description', array(
        'label'   => __('Hero Description', 'zeninsight'),
        'section' => 'zeninsight_hero',
        'type'    => 'textarea',
    ));

    // Hero Button Text
    $wp_customize->add_setting('hero_button_text', array(
        'default'           => 'Discover Our Services',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_button_text', array(
        'label'   => __('Hero Button Text', 'zeninsight'),
        'section' => 'zeninsight_hero',
        'type'    => 'text',
    ));
}
add_action('customize_register', 'zeninsight_customize_register');

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
    require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Disable WordPress admin bar for non-admins
 */
if (!current_user_can('administrator') && !is_admin()) {
    show_admin_bar(false);
}

/**
 * Remove unnecessary WordPress head items
 */
function zeninsight_clean_head() {
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
}
add_action('init', 'zeninsight_clean_head');

/**
 * Add custom body classes
 */
function zeninsight_body_classes($classes) {
    // Add class for browsers to help with progressive enhancement
    $classes[] = 'js';
    
    return $classes;
}
add_filter('body_class', 'zeninsight_body_classes');

/**
 * Custom navigation walker for better accessibility
 */
class ZenInsight_Walker_Nav_Menu extends Walker_Nav_Menu {
    /**
     * Start the element output.
     */
    public function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';

        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;

        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';

        $id = apply_filters('nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args);
        $id = $id ? ' id="' . esc_attr($id) . '"' : '';

        $output .= $indent . '<li' . $id . $class_names .'>';

        $attributes  = ! empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) .'"' : '';
        $attributes .= ! empty($item->target)     ? ' target="' . esc_attr($item->target     ) .'"' : '';
        $attributes .= ! empty($item->xfn)        ? ' rel="'    . esc_attr($item->xfn        ) .'"' : '';
        $attributes .= ! empty($item->url)        ? ' href="'   . esc_attr($item->url        ) .'"' : '';

        $item_output = isset($args->before) ? $args->before : '';
        $item_output .= '<a' . $attributes .'>';
        $item_output .= (isset($args->link_before) ? $args->link_before : '') . apply_filters('the_title', $item->title, $item->ID) . (isset($args->link_after) ? $args->link_after : '');
        $item_output .= '</a>';
        $item_output .= isset($args->after) ? $args->after : '';

        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}

/**
 * Ensure that the theme works with older versions of WordPress
 */
if (version_compare($GLOBALS['wp_version'], '4.7', '<')) {
    /**
     * Add a fallback for wp_get_custom_css() for WordPress versions < 4.7
     */
    function zeninsight_wp_get_custom_css() {
        return get_theme_mod('custom_css', '');
    }
    
    if (!function_exists('wp_get_custom_css')) {
        function wp_get_custom_css() {
            return zeninsight_wp_get_custom_css();
        }
    }
}

/**
 * Security enhancements
 */
function zeninsight_security_headers() {
    if (!is_admin()) {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: SAMEORIGIN');
        header('X-XSS-Protection: 1; mode=block');
    }
}
add_action('send_headers', 'zeninsight_security_headers');

/**
 * Performance optimizations
 */
function zeninsight_optimize_performance() {
    // Remove query strings from static resources
    if (!is_admin()) {
        add_filter('script_loader_src', 'zeninsight_remove_script_version', 15, 1);
        add_filter('style_loader_src', 'zeninsight_remove_script_version', 15, 1);
    }
}
add_action('init', 'zeninsight_optimize_performance');

function zeninsight_remove_script_version($src) {
    $parts = explode('?ver', $src);
    return $parts[0];
}

/**
 * Add structured data for SEO
 */
function zeninsight_add_structured_data() {
    if (is_front_page()) {
        $structured_data = array(
            '@context' => 'https://schema.org',
            '@type' => 'Organization',
            'name' => 'ZenInsight Group',
            'url' => home_url(),
            'description' => 'Pioneering sustainable development across Africa through integrated digital solutions, rigorous monitoring & evaluation, and transformative research.',
            'foundingDate' => '2020',
            'address' => array(
                '@type' => 'PostalAddress',
                'streetAddress' => 'Westlands Business District, ABC Place, 5th Floor',
                'addressLocality' => 'Nairobi',
                'addressCountry' => 'Kenya'
            ),
            'contactPoint' => array(
                '@type' => 'ContactPoint',
                'telephone' => '+254-700-123-456',
                'contactType' => 'customer service',
                'email' => 'info@zeninsightgroup.com'
            ),
            'sameAs' => array(
                'https://www.linkedin.com/company/zeninsight-group',
                'https://twitter.com/zeninsightgroup'
            )
        );
        
        echo '<script type="application/ld+json">' . wp_json_encode($structured_data) . '</script>';
    }
}
add_action('wp_head', 'zeninsight_add_structured_data');

/**
 * Custom excerpt length
 */
function zeninsight_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'zeninsight_excerpt_length');

/**
 * Custom excerpt more
 */
function zeninsight_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'zeninsight_excerpt_more');

/**
 * Disable file editing from WordPress admin
 */
if (!defined('DISALLOW_FILE_EDIT')) {
    define('DISALLOW_FILE_EDIT', true);
}