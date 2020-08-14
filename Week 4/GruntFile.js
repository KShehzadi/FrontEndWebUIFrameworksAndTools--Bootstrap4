'use strict';

module.exports=function(grunt)
{
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);
    grunt.initConfig({
        
        sass: {
            dist: {
                files: {
                    'css/styles.css':'css/StyleSheet.scss'
                }
            }
        }
    });
    grunt.registerTask('css',['sass']);
};