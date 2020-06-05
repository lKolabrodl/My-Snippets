<?php
        // определение количества странц с записями
        $paged   = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;

        // получение записей указанного терма в указанной таксономии
        $query   = new WP_Query( array(
          'post_type'      => 'post',
          'posts_per_page' => 15,
          'paged'          => $paged    
        ) );

        if ( $query->have_posts() ) {

        while ( $query->have_posts() ) {

          $query->the_post();
          if ( get_post_type() ) {           
            ?>

            <h1> <?php the_title() ?> </h1>
            
            <?php
          }
        }
    ?>
   

    <div class="blog__pagination">
      <?php
        // вывод меню навигации
        echo paginate_links( array(
          'current'   => max( 1, get_query_var( 'paged' ) ),
          'total'     => $query->max_num_pages,
          'post_type' => 'news',
        ) );
        ?>     
          
    </div>
        <?php    
          wp_reset_query();
          }
        ?>
