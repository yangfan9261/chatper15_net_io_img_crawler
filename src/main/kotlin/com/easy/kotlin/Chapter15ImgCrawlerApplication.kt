package com.easy.kotlin

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.scheduling.annotation.EnableScheduling
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer




@SpringBootApplication
@EnableScheduling
class Chapter15ImgCrawlerApplication: WebMvcConfigurerAdapter() {
    override fun configureContentNegotiation(config: ContentNegotiationConfigurer?) {
        config!!.favorPathExtension(true)
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(Chapter15ImgCrawlerApplication::class.java, *args)
}

val 我图URL文件名 = "我图.url"
val 百度搜索关键词列表 = arrayOf(
        "尤物",
        "性感尤物",
        "绝色尤物",
        "绝色尤物极品",
        "性感诱惑",
        "绝色性感",
        "性感90 美女",
        "激性感美女",
        "性感10美女",
        "性感短裤美女",
        "校花",
        "最美校花",
        "性感嫩模",
        "日本美女",
        "韩国美女",
        "亚洲美女",
        "最美网红",
        "美女校花",
        "高中校花",
        "大学校花",
        "SNH48黄婷婷",
        "snh48李艺彤",
        "snh48",
        "鞠婧祎",
        "男人装写真",
        "郑秀晶",
        "林允儿",
        "李知恩",
        "文艺美女",
        "美女",
        "清纯",
        "清纯性感",
        "清纯可爱",
        "萝莉",
        "超清纯气质美女",
        "嫩模",
        "尤物",
        "裴珠泫",
        "朴信惠",
        "金所炫",
        "李侑菲",
        "朴河宣",
        "孙允珠",
        "朱韵淇",
        "孙文婷",
        "李麦文",
        "陈玟予",
        "申善雅",
        "李梦皎",
        "燕子沁",
        "马艺文",
        "欧阳娜娜",
        "手绘森系小清新插画",
        "手绘建筑设计",
        "油画",
        "国家地理高清壁纸",
        "国家地理摄影精品",
        "震撼人心的摄影作品",
        "世界金奖摄影作品",
        "设计作品欣赏",
        "校花",
        "清纯校花",
        "90后美女",
        "00后小美女",
        "清纯美女"
)

val 搜狗关键词列表 = arrayOf(
        "美女",
        "艺术云图",
        "壁纸",
        "家居"
)

