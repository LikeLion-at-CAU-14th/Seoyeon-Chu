module.exports = [
(()=>{"use strict";return[
"[next]/internal/font/google/noto_serif_kr_11242489.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_serif_kr_11242489$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_serif_kr_11242489.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_serif_kr_11242489$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Noto Serif KR', 'Noto Serif KR Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_serif_kr_11242489$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_serif_kr_11242489$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 48,
    height: 48
};
}),
"[project]/app/movies/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MovieDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$movies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/movies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_serif_kr_11242489$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_serif_kr_11242489.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MovieReviewsButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MovieReviewsButton.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function MovieDetailPage({ params }) {
    const { id } = await params;
    const movie = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$movies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["movies"].find((movie)=>movie.id === Number(id));
    if (!movie) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "영화를 찾을 수 없습니다."
        }, void 0, false, {
            fileName: "[project]/app/movies/[id]/page.tsx",
            lineNumber: 28,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_serif_kr_11242489$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: movie.title
            }, void 0, false, {
                fileName: "[project]/app/movies/[id]/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                src: movie.image,
                alt: `${movie.title} 포스터`,
                width: 350,
                height: 500,
                priority: true
            }, void 0, false, {
                fileName: "[project]/app/movies/[id]/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    movie.year,
                    " · ",
                    movie.genre,
                    " · ",
                    movie.director
                ]
            }, void 0, true, {
                fileName: "[project]/app/movies/[id]/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    whiteSpace: 'pre-line'
                },
                children: movie.description
            }, void 0, false, {
                fileName: "[project]/app/movies/[id]/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MovieReviewsButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/movies/[id]/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/movies/[id]/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/MovieReviewsButton.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/MovieReviewsButton.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/MovieReviewsButton.tsx", "default");
}),
"[project]/components/MovieReviewsButton.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MovieReviewsButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/MovieReviewsButton.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MovieReviewsButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/data/movies.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "movies",
    ()=>movies
]);
const movies = [
    {
        id: 1,
        title: '나 홀로 집에',
        year: 1990,
        genre: '코미디, 가족',
        director: '크리스 콜럼버스',
        description: '크리스마스 여행을 떠난 가족에게 홀로 남겨진 소년 케빈의 이야기입니다.\n집을 노리는 두 도둑에 맞서 케빈이 기발한 함정을 만들며 집을 지켜냅니다.',
        image: '/posters/homealone.jpeg'
    },
    {
        id: 2,
        title: '나니아 연대기: 새벽 출정호의 항해',
        year: 2010,
        genre: '판타지, 모험',
        director: '마이클 앱티드',
        description: '루시와 에드먼드가 다시 나니아 세계로 들어가 펼치는 새로운 모험을 그린 이야기입니다.\n캐스피언 왕과 함께 새벽 출정호를 타고 신비로운 섬들을 탐험합니다.',
        image: '/posters/narnia.jpeg'
    },
    {
        id: 3,
        title: '포레스트 검프',
        year: 1994,
        genre: '드라마, 로맨스',
        director: '로버트 저메키스',
        description: '순수한 마음을 가진 포레스트 검프가 자신의 삶을 담담하게 이야기하는 영화입니다.\n우연처럼 이어지는 특별한 경험 속에서도 사랑과 사람에 대한 진심을 잃지 않는 모습을 보여줍니다.',
        image: '/posters/forrestgump.jpeg'
    },
    {
        id: 4,
        title: '극장판 체인소 맨: 레제편',
        year: 2025,
        genre: '애니메이션, 액션',
        director: '요시하라 타츠야',
        description: '데빌 헌터로 살아가는 덴지가 수수께끼의 소녀 레제를 만나며 벌어지는 이야기입니다.\n두 사람의 관계와 함께 강렬한 액션과 예측할 수 없는 사건들이 펼쳐집니다.',
        image: '/posters/chainsawman.jpeg'
    },
    {
        id: 5,
        title: '악마는 프라다를 입는다',
        year: 2006,
        genre: '코미디, 드라마',
        director: '데이비드 프랭클',
        description: '저널리스트를 꿈꾸는 앤디가 유명 패션 잡지의 편집장 미란다의 비서로 일하게 되면서 벌어지는 이야기입니다.\n화려한 패션 업계 속에서 일과 자신의 삶 사이의 균형을 고민하며 성장해갑니다.',
        image: '/posters/thedevilwearsprada.jpeg'
    },
    {
        id: 6,
        title: '만약에 우리',
        year: 2025,
        genre: '로맨스, 드라마',
        director: '김도영',
        description: '서로에게 가장 찬란했던 시절을 함께했던 두 사람이 지나간 사랑과 기억을 다시 마주하는 이야기입니다.\n사랑했던 순간과 헤어진 이후의 감정을 현실적으로 그려낸 로맨스 영화입니다.',
        image: '/posters/ifwe.jpeg'
    },
    {
        id: 7,
        title: '비긴 어게인',
        year: 2013,
        genre: '드라마, 음악, 로맨스',
        director: '존 카니',
        description: '싱어송라이터 그레타와 음반 프로듀서 댄이 우연히 만나 함께 음악을 만들어가는 이야기입니다.\n뉴욕의 거리 곳곳을 녹음실 삼아 새로운 앨범을 만들며 각자의 삶도 다시 시작하게 됩니다.',
        image: '/posters/beginagain.jpeg'
    }
];
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[next]/internal/font/google/noto_serif_kr_11242489.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "noto_serif_kr_11242489-module__2nMPiq__className",
});
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.117ezoe8m31dk.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/movies/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/movies/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__03iixh0s2iwv6._.js.map