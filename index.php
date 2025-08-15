<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @package ZenInsight
 */

get_header(); ?>

<main id="primary" class="site-main">
    
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

    <!-- About Section -->
    <section id="about" class="section gradient-subtle">
        <div class="container">
            <div class="text-center">
                <h2 class="section-title animate-fade-in">About Our Consultancy</h2>
                <p class="section-description animate-fade-in">
                    <?php
                    $about_page = get_page_by_path('about');
                    if ($about_page) {
                        echo wp_trim_words(get_the_content(null, false, $about_page), 50);
                    } else {
                        echo 'ZenInsight Group LTD is a pioneering Kenyan consultancy dedicated to advancing sustainable development across Africa through integrated digital solutions, rigorous monitoring & evaluation (M&E), and transformative sectoral research.';
                    }
                    ?>
                </p>
            </div>

            <!-- Mission & Vision Cards -->
            <div class="grid md:grid-cols-2" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
                <div class="card animate-fade-in">
                    <div class="card-header">
                        <div class="card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;">
                                <circle cx="12" cy="12" r="10"/>
                                <circle cx="12" cy="12" r="6"/>
                                <circle cx="12" cy="12" r="2"/>
                            </svg>
                        </div>
                        <h3 class="card-title">Our Mission</h3>
                    </div>
                    <div class="card-content">
                        <p style="text-align: center; color: hsl(var(--muted-foreground)); line-height: 1.6;">
                            To empower organizations with strategic insights, innovative solutions, and transformational guidance that drives sustainable growth, operational excellence, and market leadership in an ever-evolving business landscape.
                        </p>
                    </div>
                </div>

                <div class="card animate-fade-in">
                    <div class="card-header">
                        <div class="card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                        </div>
                        <h3 class="card-title">Our Vision</h3>
                    </div>
                    <div class="card-content">
                        <p style="text-align: center; color: hsl(var(--muted-foreground)); line-height: 1.6;">
                            To be the globally recognized leader in strategic consultancy, known for our innovative approaches, exceptional client outcomes, and our ability to anticipate and navigate the challenges of tomorrow's business environment.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Board Members -->
            <div class="text-center" style="margin-bottom: 3rem;">
                <h3 style="font-size: 2rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 1rem;">
                    Board of Directors & Key Stakeholders
                </h3>
                <p style="font-size: 1.1rem; color: hsl(var(--muted-foreground)); max-width: 32rem; margin: 0 auto;">
                    Meet our distinguished leadership team bringing decades of experience and expertise to guide our strategic vision.
                </p>
            </div>
            
            <div class="grid lg:grid-cols-3" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
                <?php
                $board_members = array(
                    array(
                        'name' => 'Dr. Sarah Kimani',
                        'role' => 'Chairman of the Board',
                        'summary' => 'Former UN Development Programme Director with 25+ years in sustainable development across Africa.'
                    ),
                    array(
                        'name' => 'James Mwangi',
                        'role' => 'CEO & Founder',
                        'summary' => 'Strategic consultant with expertise in digital transformation and business development in emerging markets.'
                    ),
                    array(
                        'name' => 'Prof. Grace Wanjiku',
                        'role' => 'Chief Strategy Officer',
                        'summary' => 'Academic and policy expert specializing in monitoring & evaluation frameworks for development projects.'
                    ),
                    array(
                        'name' => 'Michael Ochieng',
                        'role' => 'Managing Director',
                        'summary' => 'Operations leader with extensive experience in project management and organizational development.'
                    ),
                    array(
                        'name' => 'Dr. Amina Hassan',
                        'role' => 'Director of Research',
                        'summary' => 'Research specialist focused on sectoral analysis and evidence-based policy recommendations.'
                    ),
                    array(
                        'name' => 'David Kiprotich',
                        'role' => 'Chief Technology Officer',
                        'summary' => 'Technology innovator leading digital solutions and data analytics for development impact.'
                    )
                );

                foreach ($board_members as $member): ?>
                    <div class="card text-center animate-fade-in">
                        <div class="card-content">
                            <div style="position: relative; width: 6rem; height: 6rem; margin: 0 auto 1rem auto;">
                                <div style="width: 100%; height: 100%; border-radius: 50%; background: var(--gradient-primary); display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-medium);">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                </div>
                            </div>
                            <h4 style="font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 0.5rem; font-size: 1.1rem;"><?php echo esc_html($member['name']); ?></h4>
                            <p style="font-size: 0.9rem; color: hsl(var(--primary)); font-weight: 500; margin-bottom: 0.75rem;"><?php echo esc_html($member['role']); ?></p>
                            <p style="font-size: 0.85rem; color: hsl(var(--muted-foreground)); line-height: 1.5;"><?php echo esc_html($member['summary']); ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Process Section -->
    <section id="process" class="section">
        <div class="container">
            <div class="text-center">
                <h2 class="section-title animate-fade-in">Our Process</h2>
                <p class="section-description animate-fade-in">
                    Our systematic approach ensures successful project delivery through structured phases and continuous stakeholder engagement.
                </p>
            </div>

            <div style="max-width: 64rem; margin: 0 auto;">
                <div style="display: grid; gap: 2rem;">
                    <?php
                    $process_steps = array(
                        array('step' => '01', 'title' => 'Discovery & Analysis', 'description' => 'Comprehensive assessment of current state and requirements'),
                        array('step' => '02', 'title' => 'Strategy Development', 'description' => 'Collaborative strategy formulation with stakeholders'),
                        array('step' => '03', 'title' => 'Implementation Planning', 'description' => 'Detailed roadmaps and resource allocation'),
                        array('step' => '04', 'title' => 'Execution & Monitoring', 'description' => 'Active project management with continuous oversight'),
                        array('step' => '05', 'title' => 'Evaluation & Learning', 'description' => 'Impact assessment and knowledge capture'),
                        array('step' => '06', 'title' => 'Sustainability Planning', 'description' => 'Long-term sustainability and capacity transfer')
                    );

                    foreach ($process_steps as $phase): ?>
                        <div style="display: flex; gap: 1.5rem; align-items: flex-start;" class="animate-fade-in">
                            <div style="flex-shrink: 0; width: 4rem; height: 4rem; border-radius: 50%; background: var(--gradient-primary); display: flex; align-items: center; justify-content: center;">
                                <span style="color: white; font-weight: bold; font-size: 1.1rem;"><?php echo esc_html($phase['step']); ?></span>
                            </div>
                            <div style="flex: 1;">
                                <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; color: hsl(var(--foreground));"><?php echo esc_html($phase['title']); ?></h3>
                                <p style="color: hsl(var(--muted-foreground));"><?php echo esc_html($phase['description']); ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section gradient-subtle">
        <div class="container">
            <div class="text-center">
                <h2 class="section-title animate-fade-in">Our Services</h2>
                <p class="section-description animate-fade-in">
                    Comprehensive consulting solutions designed to address your unique challenges and unlock your organization's full potential.
                </p>
            </div>

            <div class="grid lg:grid-cols-3" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                <?php
                $services = array(
                    array(
                        'title' => 'Strategic Planning',
                        'description' => 'Comprehensive strategic roadmaps that align with your business objectives and market opportunities.',
                        'features' => array('Market Analysis', 'Competitive Intelligence', 'Growth Strategy', 'Risk Assessment')
                    ),
                    array(
                        'title' => 'Digital Transformation',
                        'description' => 'Navigate the digital landscape with cutting-edge solutions and technology integration.',
                        'features' => array('Digital Strategy', 'Process Automation', 'Technology Integration', 'Data Analytics')
                    ),
                    array(
                        'title' => 'Organizational Development',
                        'description' => 'Transform your organization\'s culture, structure, and capabilities for optimal performance.',
                        'features' => array('Leadership Development', 'Change Management', 'Team Building', 'Performance Optimization')
                    ),
                    array(
                        'title' => 'Business Growth',
                        'description' => 'Accelerate your growth through market expansion, innovation, and operational excellence.',
                        'features' => array('Market Expansion', 'Product Development', 'Sales Optimization', 'Partnership Strategy')
                    ),
                    array(
                        'title' => 'Risk Management',
                        'description' => 'Identify, assess, and mitigate risks while building resilient business operations.',
                        'features' => array('Risk Assessment', 'Compliance Framework', 'Crisis Management', 'Business Continuity')
                    ),
                    array(
                        'title' => 'Operations Consulting',
                        'description' => 'Optimize your operations for efficiency, quality, and sustainable performance.',
                        'features' => array('Process Improvement', 'Supply Chain', 'Quality Management', 'Cost Optimization')
                    )
                );

                foreach ($services as $service): ?>
                    <div class="card animate-fade-in" style="border: 1px solid hsl(var(--primary) / 0.1); transition: all 0.3s ease; cursor: pointer;">
                        <div class="card-header">
                            <div class="card-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;">
                                    <path d="M3 3v18h18"/>
                                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                                </svg>
                            </div>
                            <h3 class="card-title"><?php echo esc_html($service['title']); ?></h3>
                        </div>
                        <div class="card-content" style="display: flex; flex-direction: column; gap: 1rem;">
                            <p style="text-align: center; color: hsl(var(--muted-foreground)); line-height: 1.6;">
                                <?php echo esc_html($service['description']); ?>
                            </p>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                <?php foreach ($service['features'] as $feature): ?>
                                    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem;">
                                        <div style="width: 0.5rem; height: 0.5rem; background: hsl(var(--primary)); border-radius: 50%;"></div>
                                        <span style="color: hsl(var(--muted-foreground));"><?php echo esc_html($feature); ?></span>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- Call to Action -->
            <div class="text-center animate-fade-in">
                <div style="background-color: hsl(var(--card)); border-radius: 0.5rem; padding: 2rem; box-shadow: var(--shadow-medium); max-width: 32rem; margin: 0 auto;">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: hsl(var(--primary)); margin: 0 auto 1rem auto;">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"/>
                        <path d="M12 5L8 21l4-7 4 7-4-16"/>
                    </svg>
                    <h3 style="font-size: 1.5rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 1rem;">
                        Ready to Transform Your Business?
                    </h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem; line-height: 1.6;">
                        Let's discuss how our expertise can help you achieve your strategic objectives and drive sustainable growth.
                    </p>
                    <a href="#contact" class="btn btn-primary btn-lg">
                        Schedule a Consultation
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Careers Section -->
    <section id="careers" class="section">
        <div class="container">
            <div class="text-center">
                <div style="display: inline-block; background-color: hsl(var(--accent) / 0.1); color: hsl(var(--accent)); padding: 0.5rem 1rem; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 9999px; margin-bottom: 1rem;">
                    Join Our Team
                </div>
                <h2 class="section-title animate-fade-in">Career Opportunities</h2>
                <p class="section-description animate-fade-in">
                    Build your career with Africa's leading consultancy firm. Join us in creating sustainable impact across the continent.
                </p>
            </div>

            <div class="grid md:grid-cols-2" style="grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
                <?php
                $positions = array(
                    array(
                        'title' => 'Senior Business Consultant',
                        'department' => 'Strategy',
                        'location' => 'Nairobi, Kenya',
                        'type' => 'Full-time',
                        'description' => 'Lead strategic consulting projects and client relationships across diverse industries',
                        'requirements' => array('MBA or equivalent experience', '5+ years consulting experience', 'Strong analytical skills')
                    ),
                    array(
                        'title' => 'Operations Analyst',
                        'department' => 'Operations',
                        'location' => 'Remote',
                        'type' => 'Full-time',
                        'description' => 'Analyze and optimize business processes for our clients across Africa',
                        'requirements' => array('Bachelor\'s degree in relevant field', '3+ years operations experience', 'Data analysis expertise')
                    ),
                    array(
                        'title' => 'M&E Specialist',
                        'department' => 'Research',
                        'location' => 'Dar es Salaam, Tanzania',
                        'type' => 'Contract',
                        'description' => 'Design and implement monitoring & evaluation frameworks for development projects',
                        'requirements' => array('Master\'s in development studies', 'M&E certification', 'Project management skills')
                    ),
                    array(
                        'title' => 'Digital Solutions Developer',
                        'department' => 'Technology',
                        'location' => 'Kampala, Uganda',
                        'type' => 'Full-time',
                        'description' => 'Develop innovative digital solutions for sustainable development initiatives',
                        'requirements' => array('Computer Science degree', 'Full-stack development', 'Mobile app experience')
                    )
                );

                foreach ($positions as $position): ?>
                    <div class="card animate-fade-in" style="transition: all 0.3s ease;">
                        <div class="card-content" style="padding: 2rem;">
                            <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1rem;">
                                <div style="flex: 1;">
                                    <h3 style="font-size: 1.5rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">
                                        <?php echo esc_html($position['title']); ?>
                                    </h3>
                                    <div style="color: hsl(var(--primary)); font-weight: 600; margin-bottom: 0.75rem;">
                                        <?php echo esc_html($position['department']); ?>
                                    </div>
                                </div>
                                <div style="flex-shrink: 0; width: 3rem; height: 3rem; background-color: hsl(var(--accent) / 0.1); color: hsl(var(--accent)); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                        <line x1="8" y1="21" x2="16" y2="21"/>
                                        <line x1="12" y1="17" x2="12" y2="21"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem; line-height: 1.6;">
                                <?php echo esc_html($position['description']); ?>
                            </p>
                            
                            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
                                <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: hsl(var(--muted-foreground));">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                    <?php echo esc_html($position['location']); ?>
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: hsl(var(--muted-foreground));">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12,6 12,12 16,14"/>
                                    </svg>
                                    <?php echo esc_html($position['type']); ?>
                                </div>
                            </div>
                            
                            <div style="margin-bottom: 1.5rem;">
                                <h4 style="font-size: 0.85rem; font-weight: 600; color: hsl(var(--foreground)); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">
                                    Key Requirements
                                </h4>
                                <ul style="display: flex; flex-direction: column; gap: 0.5rem; margin: 0; padding: 0; list-style: none;">
                                    <?php foreach ($position['requirements'] as $req): ?>
                                        <li style="font-size: 0.9rem; color: hsl(var(--muted-foreground)); display: flex; align-items: flex-start; gap: 0.5rem;">
                                            <div style="width: 0.375rem; height: 0.375rem; background: hsl(var(--primary)); border-radius: 50%; margin-top: 0.5rem; flex-shrink: 0;"></div>
                                            <?php echo esc_html($req); ?>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                            
                            <a href="#contact" class="btn btn-primary" style="width: 100%; transition: all 0.3s ease;">
                                Apply Now
                            </a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="text-center">
                <div class="gradient-subtle" style="border-radius: 1rem; padding: 3rem;">
                    <div style="display: inline-flex; align-items: center; justify-content: center; width: 5rem; height: 5rem; background-color: hsl(var(--primary) / 0.1); color: hsl(var(--primary)); border-radius: 50%; margin-bottom: 1.5rem;">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                    </div>
                    <h3 style="font-size: 1.5rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 1rem;">
                        Don't see the right role?
                    </h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 2rem; max-width: 32rem; margin-left: auto; margin-right: auto; line-height: 1.6;">
                        We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to sustainable development across Africa.
                    </p>
                    <a href="#contact" class="btn" style="background: none; border: 2px solid hsl(var(--primary)); color: hsl(var(--primary)); padding: 0.75rem 1.5rem;">
                        Send General Application
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- News Section -->
    <section id="news" class="section">
        <div class="container">
            <div class="text-center">
                <div style="display: inline-block; background-color: hsl(var(--accent) / 0.1); color: hsl(var(--accent)); padding: 0.5rem 1rem; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 9999px; margin-bottom: 1rem;">
                    Latest Updates
                </div>
                <h2 class="section-title animate-fade-in">News & Insights</h2>
                <p class="section-description animate-fade-in">
                    Stay informed about our latest developments, partnerships, research findings, and insights on sustainable development.
                </p>
            </div>

            <!-- Featured News -->
            <div class="card animate-fade-in" style="overflow: hidden; margin-bottom: 4rem; box-shadow: var(--shadow-soft); transition: all 0.3s ease;">
                <div style="display: flex; flex-direction: column;">
                    <div style="min-height: 16rem; background: var(--gradient-primary); display: flex; align-items: center; justify-content: center;">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                            <polyline points="14,2 14,8 20,8"/>
                        </svg>
                    </div>
                    <div class="card-content" style="padding: 2rem; display: flex; flex-direction: column; justify-content: center;">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                            <span style="background-color: hsl(var(--primary) / 0.1); color: hsl(var(--primary)); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.85rem; font-weight: 500;">
                                Featured
                            </span>
                            <span style="color: hsl(var(--accent)); font-weight: 500; font-size: 0.85rem;">
                                Partnership
                            </span>
                        </div>
                        <h3 style="font-size: clamp(1.5rem, 3vw, 2rem); font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 1rem; line-height: 1.2;">
                            ZenInsight Group Partners with Global Development Fund
                        </h3>
                        <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem; font-size: 1.1rem; line-height: 1.6;">
                            We're excited to announce our partnership with the Global Development Fund to support sustainable development initiatives across East Africa.
                        </p>
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                            <div style="display: flex; align-items: center; gap: 1rem; font-size: 0.9rem; color: hsl(var(--muted-foreground));">
                                <div style="display: flex; align-items: center; gap: 0.25rem;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                        <line x1="16" y1="2" x2="16" y2="6"/>
                                        <line x1="8" y1="2" x2="8" y2="6"/>
                                        <line x1="3" y1="10" x2="21" y2="10"/>
                                    </svg>
                                    December 15, 2024
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.25rem;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                    James Mwangi
                                </div>
                            </div>
                            <a href="#contact" class="btn" style="background: none; border: 2px solid hsl(var(--primary)); color: hsl(var(--primary)); display: flex; align-items: center; gap: 0.5rem;">
                                Read More
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease;">
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                    <polyline points="12,5 19,12 12,19"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Regular News Grid -->
            <div class="grid lg:grid-cols-3" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
                <?php
                $news_items = array(
                    array(
                        'title' => 'New Research Publication: Digital Transformation in African SMEs',
                        'excerpt' => 'Our latest research explores how small and medium enterprises across Africa are leveraging digital technologies for growth.',
                        'date' => '2024-12-10',
                        'author' => 'Dr. Amina Hassan',
                        'category' => 'Research'
                    ),
                    array(
                        'title' => 'ZenInsight Group Expands Operations to Uganda',
                        'excerpt' => 'Following successful projects in Kenya and Tanzania, we\'re proud to announce the opening of our new office in Kampala, Uganda.',
                        'date' => '2024-12-05',
                        'author' => 'Michael Ochieng',
                        'category' => 'Company News'
                    ),
                    array(
                        'title' => 'Upcoming Webinar: M&E Best Practices for Development Projects',
                        'excerpt' => 'Join our experts for an insightful webinar on implementing effective monitoring and evaluation frameworks.',
                        'date' => '2024-12-20',
                        'author' => 'Prof. Grace Wanjiku',
                        'category' => 'Events'
                    ),
                    array(
                        'title' => 'Impact Report 2024: Measuring Our Contribution to Sustainable Development',
                        'excerpt' => 'Our annual impact report showcases the measurable difference we\'ve made across 50+ projects in 2024.',
                        'date' => '2024-12-01',
                        'author' => 'Dr. Sarah Kimani',
                        'category' => 'Impact Report'
                    ),
                    array(
                        'title' => 'Technology Innovation Award for Digital Agriculture Platform',
                        'excerpt' => 'Our digital agriculture platform wins recognition at the East Africa Technology Innovation Awards 2024.',
                        'date' => '2024-11-28',
                        'author' => 'David Kiprotich',
                        'category' => 'Awards'
                    )
                );

                foreach (array_slice($news_items, 0, 6) as $item): ?>
                    <div class="card animate-fade-in" style="overflow: hidden; transition: all 0.3s ease;">
                        <div style="height: 12rem; background: var(--gradient-subtle); display: flex; align-items: center; justify-content: center;">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: hsl(var(--primary));">
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                <polyline points="14,2 14,8 20,8"/>
                            </svg>
                        </div>
                        <div class="card-content">
                            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                                <span style="color: hsl(var(--accent)); font-weight: 500; font-size: 0.85rem;">
                                    <?php echo esc_html($item['category']); ?>
                                </span>
                            </div>
                            <h3 style="font-size: 1.25rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 0.75rem; line-height: 1.3; transition: color 0.3s ease;">
                                <?php echo esc_html($item['title']); ?>
                            </h3>
                            <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem; font-size: 0.9rem; line-height: 1.5;">
                                <?php echo esc_html($item['excerpt']); ?>
                            </p>
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                                    <div style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.8rem; color: hsl(var(--muted-foreground));">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                            <line x1="16" y1="2" x2="16" y2="6"/>
                                            <line x1="8" y1="2" x2="8" y2="6"/>
                                            <line x1="3" y1="10" x2="21" y2="10"/>
                                        </svg>
                                        <?php echo date('M j, Y', strtotime($item['date'])); ?>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.8rem; color: hsl(var(--muted-foreground));">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                            <circle cx="12" cy="7" r="4"/>
                                        </svg>
                                        <?php echo esc_html($item['author']); ?>
                                    </div>
                                </div>
                                <a href="#contact" style="background: none; border: none; padding: 0.5rem; color: hsl(var(--muted-foreground)); display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; cursor: pointer;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease;">
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                        <polyline points="12,5 19,12 12,19"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- Newsletter Signup -->
            <div class="text-center">
                <div class="gradient-subtle" style="border-radius: 1rem; padding: 3rem;">
                    <div style="display: inline-flex; align-items: center; justify-content: center; width: 5rem; height: 5rem; background-color: hsl(var(--primary) / 0.1); color: hsl(var(--primary)); border-radius: 50%; margin-bottom: 1.5rem;">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                            <polyline points="14,2 14,8 20,8"/>
                        </svg>
                    </div>
                    <h3 style="font-size: 1.5rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 1rem;">
                        Stay Updated
                    </h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 2rem; max-width: 32rem; margin-left: auto; margin-right: auto; line-height: 1.6;">
                        Subscribe to our newsletter to receive the latest news, insights, and updates on sustainable development and consultancy trends.
                    </p>
                    <div style="display: flex; gap: 1rem; max-width: 28rem; margin: 0 auto;">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            class="form-input"
                            style="flex: 1; padding: 0.75rem; border: 1px solid hsl(var(--border)); border-radius: 0.5rem; background: hsl(var(--background)); color: hsl(var(--foreground)); transition: all 0.3s ease;"
                        />
                        <a href="#contact" class="btn btn-primary btn-lg">
                            Subscribe
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section gradient-subtle">
        <div class="container">
            <div class="text-center">
                <div style="display: inline-block; background-color: hsl(var(--accent) / 0.1); color: hsl(var(--accent)); padding: 0.5rem 1rem; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 9999px; margin-bottom: 1rem;">
                    Get In Touch
                </div>
                <h2 class="section-title animate-fade-in">Contact Us</h2>
                <p class="section-description animate-fade-in">
                    Ready to start your transformation journey? Contact our team to discuss how we can support your sustainable development goals.
                </p>
            </div>

            <div style="max-width: 80rem; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 3rem;">
                <!-- Contact Information -->
                <div style="display: flex; flex-direction: column; gap: 2rem;">
                    <div>
                        <h3 style="font-size: 1.5rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 2rem;">
                            Reach Out to Us
                        </h3>
                        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                            
                            <div class="card" style="border: none; box-shadow: var(--shadow-soft);">
                                <div class="card-content">
                                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                                        <div style="flex-shrink: 0; width: 3rem; height: 3rem; background-color: hsl(var(--primary) / 0.1); color: hsl(var(--primary)); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                                <polyline points="22,6 12,13 2,6"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 style="font-weight: 600; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">Email</h4>
                                            <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.25rem;">info@zeninsightgroup.com</p>
                                            <p style="color: hsl(var(--muted-foreground));">partnerships@zeninsightgroup.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card" style="border: none; box-shadow: var(--shadow-soft);">
                                <div class="card-content">
                                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                                        <div style="flex-shrink: 0; width: 3rem; height: 3rem; background-color: hsl(var(--primary) / 0.1); color: hsl(var(--primary)); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 style="font-weight: 600; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">Phone</h4>
                                            <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.25rem;">+254 700 123 456</p>
                                            <p style="color: hsl(var(--muted-foreground));">+255 700 789 012</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card" style="border: none; box-shadow: var(--shadow-soft);">
                                <div class="card-content">
                                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                                        <div style="flex-shrink: 0; width: 3rem; height: 3rem; background-color: hsl(var(--primary) / 0.1); color: hsl(var(--primary)); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/>
                                                <circle cx="12" cy="10" r="3"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 style="font-weight: 600; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">Office Locations</h4>
                                            <div style="display: flex; flex-direction: column; gap: 0.5rem; color: hsl(var(--muted-foreground));">
                                                <p><strong>Nairobi, Kenya</strong><br />Westlands Business District<br />ABC Place, 5th Floor</p>
                                                <p><strong>Dar es Salaam, Tanzania</strong><br />Masaki Peninsula<br />Slipway Shopping Centre</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card" style="border: none; box-shadow: var(--shadow-soft);">
                                <div class="card-content">
                                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                                        <div style="flex-shrink: 0; width: 3rem; height: 3rem; background-color: hsl(var(--primary) / 0.1); color: hsl(var(--primary)); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="10"/>
                                                <polyline points="12,6 12,12 16,14"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 style="font-weight: 600; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">Business Hours</h4>
                                            <div style="display: flex; flex-direction: column; gap: 0.25rem; color: hsl(var(--muted-foreground));">
                                                <p>Monday - Friday: 8:00 AM - 6:00 PM EAT</p>
                                                <p>Saturday: 9:00 AM - 2:00 PM EAT</p>
                                                <p>Sunday: Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div>
                    <div class="card" style="border: none; box-shadow: var(--shadow-soft);">
                        <div class="card-content" style="padding: 2rem;">
                            <h3 style="font-size: 1.5rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 1.5rem;">
                                Send Us a Message
                            </h3>
                            <form style="display: flex; flex-direction: column; gap: 1.5rem;">
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                                    <div>
                                        <label class="form-label">First Name *</label>
                                        <input type="text" class="form-input" placeholder="John" />
                                    </div>
                                    <div>
                                        <label class="form-label">Last Name *</label>
                                        <input type="text" class="form-input" placeholder="Doe" />
                                    </div>
                                </div>
                                
                                <div>
                                    <label class="form-label">Email Address *</label>
                                    <input type="email" class="form-input" placeholder="john.doe@example.com" />
                                </div>
                                
                                <div>
                                    <label class="form-label">Company/Organization</label>
                                    <input type="text" class="form-input" placeholder="Your Company Name" />
                                </div>
                                
                                <div>
                                    <label class="form-label">Service Interest</label>
                                    <select class="form-select">
                                        <option value="">Select a service</option>
                                        <option value="digital-solutions">Digital Solutions</option>
                                        <option value="monitoring-evaluation">Monitoring & Evaluation</option>
                                        <option value="sectoral-research">Sectoral Research</option>
                                        <option value="strategic-planning">Strategic Planning</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label class="form-label">Message *</label>
                                    <textarea class="form-textarea" placeholder="Tell us about your project or how we can help you..."></textarea>
                                </div>
                                
                                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();