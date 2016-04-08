<?php
$title = the_title('', '', false);
$prev_post = get_adjacent_post(false, '', true);
$next_post = get_adjacent_post(false, '', false);
?>

<?php get_header(); ?>

<div class="content-index">
	<?php if (have_posts()) : ?>
		<?php if (is_search()) { ?><h2><?php _e( 'Search results', 'solofolio' ); ?></h2><?php } ?>
		<?php while (have_posts()) : the_post(); ?>
			<div class="entry" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<?php if ( has_post_thumbnail()) : ?>
					<?php $pt = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'large' ); ?>
					<div class="wp-caption blog-featured-image" style="max-width: <?php echo $pt[1];?>px">
						<?php the_post_thumbnail('large'); ?>
						<p class="wp-caption-text"><?php echo get_post(get_post_thumbnail_id())->post_excerpt ?></p>
					</div>
				<?php endif; ?>
				<div class="post-meta">
					<?php if ( !empty($title) ) { ?>
					<h2 class="post-title">
						<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php _e( 'Permanent Link to', 'solofolio' ); ?> <?php the_title(); ?>"><?php the_title(); ?></a>
					</h2>
					<?php } ?>
					<h4 class="post-byline">
						<?php if (get_theme_mod('solofolio_blog_showdate')) { echo get_the_date(); } ?>
						<?php if (get_theme_mod('solofolio_blog_showauthor')) {?>by <?php the_author() ?><?php } ?>
						<?php if (get_theme_mod('solofolio_blog_showcat')) {?>in <?php the_category(', ') ?><?php } ?>
					</h4>
				</div>
				<?php the_content( __('Continue reading &rsaquo;','solofolio') ); ?>
				<?php wp_link_pages(); ?>
				<?php if (get_theme_mod('solofolio_blog_showtags')) { the_tags( '<div class="tag-links">Tags: ', ', ', '</div>' ); } ?>
			</div>
		<?php endwhile; ?>
		<?php if (is_single()) : ?>
			<div class="pagination-nav">
				<div class="left">
					<?php if(!empty($prev_post)) { ?>
					<h4><?php _e( 'Previous', 'solofolio' ); ?></h4>
					<?php previous_post_link('%link', '%title'); } ?>
				</div>
				<div class="right">
					<?php if(!empty($next_post)) { ?>
					<h4><?php _e( 'Next', 'solofolio' ); ?></h4>
					<?php next_post_link('%link', '%title'); } ?>
				</div>
			</div>
			<div class="comments">
				<?php comments_template(); ?>
			</div>
		<?php else : ?>
			<div class="pagination-nav">
				<div class="left"><?php next_posts_link('&lsaquo; Previous') ?></div>
				<div class="right"><?php previous_posts_link('Next &rsaquo;') ?></div>
			</div>
		<?php endif; ?>
	<?php endif; ?>
</div>

<?php get_footer(); ?>
